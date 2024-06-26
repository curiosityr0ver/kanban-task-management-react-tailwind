import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardIcon from "../assets/icon-board.svg";
import boardsSlice from "../redux/boardsSlice";
import AddEditBoardModal from "../modals/AddEditBoardModal";

function Sidebar({ isSideBarOpen }) {
  const dispatch = useDispatch();
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const boards = useSelector((state) => state.boards);

  return (
    <div>
      <div
        className={
          isSideBarOpen
            ? `min-w-[261px] bg-white dark:bg-[#2b2c37]  fixed top-[72px] h-screen  items-center left-0 z-20`
            : ` bg-[#635FC7] dark:bg-[#2b2c37] dark:hover:bg-[#635FC7] top-auto bottom-10 justify-center items-center hover:opacity-80 cursor-pointer  p-0 transition duration-300 transform fixed felx w-[56px] h-[48px] rounded-r-full  `
        }
      >
        <div>
          {/* reWrite modal  */}


          <div className=" bg-white  dark:bg-[#2b2c37]    w-full   py-4 rounded-xl">
            <h3 className=" dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8 ">
              ALL PROJECTS ({boards?.length})
            </h3>

            <div className="  dropdown-borad flex flex-col h-[70vh]  justify-between ">
              <div>
                {boards.map((board, index) => (
                  <div
                    className={` flex items-baseline space-x-2 px-5 mr-8 rounded-r-full duration-500 ease-in-out py-4 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white  ${board.isActive &&
                      " bg-[#635fc7] rounded-r-full text-white mr-8 "
                      } `}
                    key={index}
                    onClick={() => {
                      dispatch(boardsSlice.actions.setBoardActive({ index }));
                    }}
                  >
                    <img src={boardIcon} className="  filter-white  h-4 " />{" "}
                    <p className=" text-lg font-bold ">{board.name}</p>
                  </div>
                ))}

                <div
                  className=" flex  items-baseline space-x-2  mr-8 rounded-r-full duration-500 ease-in-out cursor-pointer text-[#635fc7] px-5 py-4 hover:bg-[#635fc71a] hover:text-[#635fc7] dark:hover:bg-white  "
                  onClick={() => {
                    setIsBoardModalOpen(true);
                  }}
                >
                  <img src={boardIcon} className="   filter-white  h-4 " />
                  <p className=" text-lg font-bold  ">Create New Project </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isBoardModalOpen && (
        <AddEditBoardModal
          type="add"
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      )}
    </div>
  );
}

export default Sidebar;
