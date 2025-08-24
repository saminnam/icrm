import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiOutlinePercentage } from "react-icons/ai";
import { ImTable2 } from "react-icons/im";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Quill from "quill";
import ProductDataPopup from "../modalPopup/ProductDataPopup";

// --- 1. Dynamic Font Sizes (5px to 40px) ---
const MIN_FONT_SIZE = 18;
const MAX_FONT_SIZE = 25;
const FONT_SIZE_STEP = 1;

const SIZES = [];
for (let i = MIN_FONT_SIZE; i <= MAX_FONT_SIZE; i += FONT_SIZE_STEP) {
  SIZES.push(`${i}px`);
}

const Size = Quill.import("attributors/style/size");
Size.whitelist = SIZES;
Quill.register(Size, true);

const TextEditor = () => {
  const [openPopup, setOpenPopup] = useState(false);
  // State to manage multiple content boxes and their associated data
  const [contentBoxes, setContentBoxes] = useState([
    {
      id: Date.now(), // Unique ID for each box
      value: "",
      showTableModal: false,
      tableRows: 2,
      tableCols: 2,
      price: 0,
      discount: 0,
      subTotal: 0,
      cgstSgst: 0,
      total: 0,
      removeGst: false,
      showIgst: false,
    },
  ]);

  const quillRefs = useRef({}); // Use a ref to store references to multiple Quill instances

  // Define modules with history for undo/redo
  const getModules = (boxId) => ({
    toolbar: {
      container: [
        [{ font: [] }],
        [{ size: SIZES }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link", "image", "video"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        ["clean"],
      ],
      handlers: {
      },
    },
    history: {
      delay: 1000,
      maxStack: 100,
      userOnly: false,
    },
    // Optional: Image resize module if you install it
    // imageResize: {
    //   parchment: Quill.import('parchment'),
    //   modules: ['Resize', 'DisplaySize', 'Toolbar']
    // }
  });

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "align",
    "link",
    "image",
    "video",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
  ];

  const handleAddContentBox = () => {
    setContentBoxes((prevBoxes) => [
      ...prevBoxes,
      {
        id: Date.now(),
        value: "",
        showTableModal: false,
        tableRows: 2,
        tableCols: 2,
        price: 0,
        discount: 0,
        subTotal: 0,
        cgstSgst: 0,
        total: 0,
        removeGst: false,
        showIgst: false,
      },
    ]);
  };

  const handleCloseContentBox = (idToClose) => {
    setContentBoxes((prevBoxes) =>
      prevBoxes.filter((box) => box.id !== idToClose)
    );
  };

  const handleQuillChange = (id, newValue) => {
    setContentBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, value: newValue } : box
      )
    );
  };

  const handleInsertTable = (id) => {
    setContentBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, showTableModal: true } : box
      )
    );
  };

  const createTable = (id) => {
    const editor = quillRefs.current[id]?.getEditor();
    if (editor) {
      const range = editor.getSelection();
      if (range) {
        const box = contentBoxes.find((b) => b.id === id);
        let tableHtml = '<table class="w-full border border-gray-300 mb-4">';
        tableHtml += "<tbody>";
        for (let r = 0; r < box.tableRows; r++) {
          tableHtml += "<tr>";
          for (let c = 0; c < box.tableCols; c++) {
            tableHtml += '<td class="p-2 border border-gray-300"></td>';
          }
          tableHtml += "</tr>";
        }
        tableHtml += "</tbody></table>";

        editor.insertEmbed(range.index, "html", tableHtml);
        editor.setSelection(range.index + 1);
      }
    }
    setContentBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id
          ? { ...box, showTableModal: false, tableRows: 2, tableCols: 2 }
          : box
      )
    );
  };

  const handleTableModalRowsChange = (id, value) => {
    setContentBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, tableRows: parseInt(value) || 1 } : box
      )
    );
  };

  const handleTableModalColsChange = (id, value) => {
    setContentBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, tableCols: parseInt(value) || 1 } : box
      )
    );
  };

  // --- Undo/Redo Functions (for a specific Quill instance) ---
  const handleUndo = (id) => {
    if (quillRefs.current[id]) {
      quillRefs.current[id].getEditor().history.undo();
    }
  };

  const handleRedo = (id) => {
    if (quillRefs.current[id]) {
      quillRefs.current[id].getEditor().history.redo();
    }
  };

  // --- Calculation Table Handlers ---
  const handleCalculationChange = (id, field, value) => {
    setContentBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, [field]: parseFloat(value) || 0 } : box
      )
    );
  };

  const handleCheckboxChange = (id, field) => {
    setContentBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, [field]: !box[field] } : box
      )
    );
  };

  return (
    <div className="container mt-10">
      {openPopup && (
        <ProductDataPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      )}

      {contentBoxes.map((box, index) => (
        <div
          key={box.id}
          className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-10"
        >
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-gray-800">
              Create Your Invoice Content {index + 1}
            </h1>
            <div className="flex flex-wrap justify-between items-end gap-2 border-b border-gray-200 mb-4 pb-2">
              <button
                className="text-white flex items-center gap-1 bg-blue-700 py-2 cursor-pointer hover:bg-blue-800 px-3 rounded"
                onClick={handleAddContentBox}
              >
                <MdAddCircleOutline className="text-2xl"/> <span className="font-semibold">Content Box</span>
              </button>
              <div>
                <button
                  onClick={() => handleUndo(box.id)}
                  className="px-3 py-1 cursor-pointer text-gray-700 font-semibold rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                >
                  <i className="fas fa-undo"></i> Go Back
                </button>
                <button
                  onClick={() => handleRedo(box.id)}
                  className="px-3 py-1 cursor-pointer text-gray-700 font-semibold rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                >
                  <i className="fas fa-redo"></i> Go Front
                </button>
                {/* <button
                  onClick={() => handleInsertTable(box.id)}
                  className="px-2 py-2 text-gray-500 text-2xl cursor-pointer"
                >
                  <ImTable2 />
                </button> */}
              </div>
            </div>
            <ReactQuill
              ref={(el) => (quillRefs.current[box.id] = el)}
              theme="snow"
              value={box.value}
              onChange={(newValue) => handleQuillChange(box.id, newValue)}
              modules={getModules(box.id)} // Pass modules for this specific Quill instance
              formats={formats}
              className="border border-gray-300 rounded-md"
            />
            <div className="mt-4 flex justify-between p-4 bg-gray-100 rounded-md">
              <button
                className="text-white flex gap-1 items-center font-semibold bg-blue-700 py-2 cursor-pointer hover:bg-blue-800 px-3 rounded"
                onClick={() => setOpenPopup(true)}
              >
                <MdAddCircleOutline className="text-2xl"/>
                <span>Select Product</span>
              </button>
              <button
                className="text-white font-semibold flex gap-1 items-center bg-red-700 py-2 cursor-pointer hover:bg-red-800 px-3 rounded"
                onClick={() => handleCloseContentBox(box.id)}
              >
                <IoMdCloseCircleOutline className="text-2xl"/>
                <span>Content Box</span>
              </button>
            </div>

            {box.showTableModal && (
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                  <h3 className="text-lg font-bold mb-4">Insert Table</h3>
                  <div className="mb-4">
                    <label
                      htmlFor={`rows-${box.id}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Rows:
                    </label>
                    <input
                      type="number"
                      id={`rows-${box.id}`}
                      min="1"
                      value={box.tableRows}
                      onChange={(e) =>
                        handleTableModalRowsChange(box.id, e.target.value)
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor={`cols-${box.id}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Columns:
                    </label>
                    <input
                      type="number"
                      id={`cols-${box.id}`}
                      min="1"
                      value={box.tableCols}
                      onChange={(e) =>
                        handleTableModalColsChange(box.id, e.target.value)
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() =>
                        setContentBoxes((prevBoxes) =>
                          prevBoxes.map((b) =>
                            b.id === box.id
                              ? { ...b, showTableModal: false }
                              : b
                          )
                        )
                      }
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => createTable(box.id)}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Insert
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Calculation Table */}
          <div className="overflow-x-auto border border-gray-300 rounded">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 min-w-[160px] md:w-auto text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 min-w-[160px] md:w-auto text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Discount
                  </th>
                  <th className="px-6 py-3 min-w-[160px] md:w-auto text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                    Sub Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="p-4">
                    <div className="flex items-center border border-gray-300 rounded px-2 py-1.5 bg-white">
                      <LiaRupeeSignSolid className="text-gray-600 mr-2" />
                      <input
                        type="number"
                        className="w-full bg-transparent text-gray-900 focus:outline-none focus:ring-0 border-none p-0"
                        placeholder="0.00"
                        value={box.price}
                        onChange={(e) =>
                          handleCalculationChange(
                            box.id,
                            "price",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center border border-gray-300 rounded px-2 py-1.5 bg-white">
                      <AiOutlinePercentage className="text-gray-600 mr-2" />
                      <input
                        type="number"
                        className="w-full bg-transparent text-gray-900 focus:outline-none focus:ring-0 border-none p-0"
                        placeholder="0"
                        value={box.discount}
                        onChange={(e) =>
                          handleCalculationChange(
                            box.id,
                            "discount",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center border border-gray-300 rounded px-2 py-1.5 bg-white">
                      <LiaRupeeSignSolid className="text-gray-600 mr-2" />
                      <input
                        type="number"
                        className="w-full bg-transparent text-gray-900 focus:outline-none focus:ring-0 border-none p-0"
                        placeholder="0.00"
                        value={box.subTotal}
                        onChange={(e) =>
                          handleCalculationChange(
                            box.id,
                            "subTotal",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 min-w-[160px] md:w-auto text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CGST & SGST:
                    </th>
                    <th className="px-6 py-3 min-w-[160px] md:w-auto text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total:
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-4">
                      <div className="flex items-center border border-gray-300 rounded px-2 py-1.5 bg-white">
                        <LiaRupeeSignSolid className="text-gray-600 mr-2" />
                        <input
                          type="number"
                          className="w-full bg-transparent text-gray-900 focus:outline-none focus:ring-0 border-none p-0"
                          placeholder="0.00"
                          value={box.cgstSgst}
                          onChange={(e) =>
                            handleCalculationChange(
                              box.id,
                              "cgstSgst",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center border border-gray-300 rounded px-2 py-1.5 bg-white">
                        <LiaRupeeSignSolid className="text-gray-600 mr-2" />
                        <input
                          type="number"
                          className="w-full bg-transparent text-gray-900 focus:outline-none focus:ring-0 border-none p-0"
                          placeholder="0"
                          value={box.total}
                          onChange={(e) =>
                            handleCalculationChange(
                              box.id,
                              "total",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-5 flex items-center justify-between mx-4 rounded">
                <div className="flex gap-5">
                  <div className="flex items-center justify-between font-semibold text-gray-800 gap-3">
                    <span>Remove GST</span>
                    <input
                      type="checkbox"
                      className="scale-125"
                      checked={box.removeGst}
                      onChange={() => handleCheckboxChange(box.id, "removeGst")}
                    />
                  </div>
                  <div className="flex items-center justify-between font-semibold text-gray-800 gap-3">
                    <span>Show IGST</span>
                    <input
                      type="checkbox"
                      className="scale-125"
                      checked={box.showIgst}
                      onChange={() => handleCheckboxChange(box.id, "showIgst")}
                    />
                  </div>
                </div>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-900 cursor-pointer font-medium rounded text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Create Invoice
                </button>
              </div>
              <div className="mx-5 mt-16">
                <input type="text" placeholder="Enter a custom email to override the default invoice message." className="w-full py-2 px-2 rounded border-gray-300 border-2"/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextEditor;
