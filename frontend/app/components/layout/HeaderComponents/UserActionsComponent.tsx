"use client";

import { useAppSelector } from "@/store/store";
import Link from "next/link";
import React, { useRef } from "react";
import Modal from "../../ui/modal/Modal";

const UserActionsComponent = () => {
  const static_actions_data = useAppSelector((state) => state.dataReducer);
  const searchModalRef = useRef<HTMLDialogElement>(null);
  const favoriteModalRef = useRef<HTMLDialogElement>(null);

  const handleModalAction = (
    action: () => void,
    type: "search" | "favorite"
  ) => {
    action();
    if (type === "search" && searchModalRef.current) {
      searchModalRef.current.showModal();
    } else if (type === "favorite" && favoriteModalRef.current) {
      favoriteModalRef.current.showModal();
    }
  };

  return (
    <ul className="hidden md:flex items-center gap-3 lg:gap-7 justify-between">
      {static_actions_data.layoutData.userActions.map((item, index) => (
        <li
          className="cursor-pointer flex justify-center items-center"
          key={index}
        >
          {item.modal ? (
            <div className="relative flex justify-center items-center">
              <button
                onClick={() => {
                  if (item.modal?.buttons[0]?.action) {
                    handleModalAction(
                      item.modal.buttons[0].action,
                      item.modal.type
                    );
                  }
                }}
              >
                {item.icon}
              </button>
            </div>
          ) : (
            item.links &&
            item.links.length > 0 && (
              <Link href={item.links[0].href}>{item.icon}</Link>
            )
          )}
        </li>
      ))}
      <Modal modalsRef={searchModalRef}>
        <div>search modal</div>
      </Modal>
      <Modal modalsRef={favoriteModalRef}>
        <div>favorite modal</div>
      </Modal>
    </ul>
  );
};

export default UserActionsComponent;
