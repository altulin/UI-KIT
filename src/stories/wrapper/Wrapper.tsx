import React, { ReactNode } from "react";
import "./wrapper.css";

interface IWrapperProps {
  children?: ReactNode;
  block?: string;
  modificator?: string;
}

export const Wrapper = ({ children, block, modificator }: IWrapperProps) => {
  return (
    <section
      className={[
        "wrapper",
        `${(block && `wrapper__${block}`) || ""}`,
        `${
          (block && modificator && `wrapper__${block}--${modificator}`) || ""
        }`,
      ].join(" ")}
    >
      {children}
    </section>
  );
};
