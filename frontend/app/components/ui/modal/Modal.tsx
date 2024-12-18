import { ReactNode, RefObject } from "react";
import CloseGrayIcon from "../../icons/CloseGrayIcon";

type Props = {
  children: ReactNode;
  title?: string;
  modalsRef: RefObject<HTMLDialogElement>;
  className?: string;
};

const Modal = ({ children, modalsRef, className, title }: Props) => {
  return (
    <dialog ref={modalsRef} className="modal">
      <div className={`modal-box max-w-[690px] relative pt-5 pb-11 px-7 ${className}`}>
        <div
          className={`flex w-full justify-end pb-5 ${title && "border-b"}`}
        >
          <form
            method="dialog"
            className="flex items-center justify-between w-full"
          >
            <h2 className="lg">{title}</h2>
            <button>
              <CloseGrayIcon />
            </button>
          </form>
        </div>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
