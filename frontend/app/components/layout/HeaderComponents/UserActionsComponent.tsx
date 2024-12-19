"use client";

import { useAppSelector } from "@/store/store";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Modal from "../../ui/modal/Modal";
import Input from "../../ui/forms/Input";
import { useForm } from "react-hook-form";
import SearchIcon from "../../icons/searchIcon";

interface SearchFormValues {
  query: string;
}

const UserActionsComponent = () => {
  const { register, handleSubmit } = useForm<SearchFormValues>();
  const static_actions_data = useAppSelector((state) => state.dataReducer);
  const favoriteModalRef = useRef<HTMLDialogElement>(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchSection = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const openFavoriteModal = () => {
    if (favoriteModalRef.current) {
      favoriteModalRef.current.showModal();
    }
  };

  const onSearchSubmit = (data: SearchFormValues) => {
    console.log("Search Query:", data.query);
    // می‌توانید اینجا کد ارسال درخواست جستجو را اضافه کنید.
  };

  return (
    <div>
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
                    if (item.modal?.type === "search") {
                      toggleSearchSection();
                    } else if (item.modal?.type === "favorite") {
                      openFavoriteModal();
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
        <Modal modalsRef={favoriteModalRef}>
          <div>
            <h2 className="text-lg font-semibold mb-4">محصولات مورد علاقه</h2>
            <ul>
              <li>محصول 1</li>
              <li>محصول 2</li>
              <li>محصول 3</li>
            </ul>
          </div>
        </Modal>
      </ul>
      {isSearchVisible && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4">
          <form
            onSubmit={handleSubmit(onSearchSubmit)}
            className="flex w-full justify-between items-center gap-2"
          >
            <Input
              name="query"
              register={register}
              placeholder="Grifo, Lolito, Muggo, Pingky..."
              className="w-full"
            />
            <button
              type="submit"
              className="px-2 py-2"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserActionsComponent;
