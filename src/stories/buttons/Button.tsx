// import React from "react";
import "./button.css";
import { Wrapper } from "../wrapper/Wrapper";

interface IButtonCollection {
  backgroundColor:
    | "Primary"
    | "Primary White"
    | "Secondary"
    | "Secondary White"
    | "Flat"
    | "Flat White"
    | "Secondary dark";
  label: string;
  disabled?: boolean;
  loader?: boolean;
  onClick?: () => void;
}

interface IButton {
  backgroundColor: string;
  label: string;
  labelIcon?: boolean;
  icon?: boolean;
  iconCircle?: boolean;
  disabled?: boolean;
  loader?: boolean;
}

const getLowerWord = (word: string) => {
  return word
    .split(" ")
    .map((item) => {
      return item.charAt(0).toLowerCase() + item.slice(1);
    })
    .join("");
};

const Button = ({
  backgroundColor,
  label,
  labelIcon,
  icon,
  iconCircle,
  disabled,
  loader,
}: IButton) => {
  const svg = (
    <svg
      fill="none"
      className="btn__plus"
      width="16"
      height="16"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m2.1333 7.8556c-0.63207 0-1.1445 0.51239-1.1445 1.1444 0 0.63206 0.51239 1.1445 1.1445 1.1445h5.7221l1e-5 5.7223c0 0.6321 0.51239 1.1445 1.1444 1.1445s1.1445-0.5124 1.1445-1.1445l-1e-4 -5.7223h5.7224c0.6321 0 1.1445-0.51243 1.1445-1.1445s-0.5124-1.1444-1.1445-1.1444h-5.7224v-5.7222c0-0.63206-0.51235-1.1445-1.1444-1.1445s-1.1444 0.51238-1.1444 1.1445v5.7222h-5.7221z"
        clip-rule="evenodd"
        fill-rule="evenodd"
      />
    </svg>
  );

  const loaderIcon = (
    <svg
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
      xmlns="http://www.w3.org/2000/svg"
      className="btn__loaderIcon"
    >
      <path d="m20.104 9.3811c-0.0122-0.26035-0.1272-0.50521-0.3199-0.68073-0.1927-0.17551-0.4472-0.2673-0.7075-0.25517-0.2604 0.01213-0.5052 0.12718-0.6807 0.31985-0.1756 0.19267-0.2674 0.44718-0.2552 0.70752 0.0826 1.757-0.4274 3.4909-1.4484 4.9233s-2.4936 2.4803-4.1815 2.9753c-1.6879 0.4951-3.4932 0.4087-5.1261-0.2453-1.6329-0.654-2.9987-1.8377-3.8782-3.361-0.87951-1.5234-1.2217-3.298-0.97161-5.0392 0.25008-1.7412 1.0779-3.3478 2.3506-4.562s2.9165-1.9656 4.6674-2.1336c1.7509-0.16798 3.5076 0.25722 4.9879 1.2073 0.1086 0.06966 0.2299 0.11723 0.357 0.14002 0.127 0.02278 0.2573 0.02032 0.3833-0.00725 0.1261-0.02756 0.2455-0.07969 0.3514-0.1534 0.106-0.07371 0.1963-0.16756 0.266-0.2762 0.0697-0.10863 0.1172-0.22993 0.14-0.35695s0.0203-0.25729-0.0072-0.38336c-0.0276-0.12608-0.0797-0.24548-0.1534-0.35141s-0.1676-0.1963-0.2762-0.26596c-1.8506-1.187-4.0463-1.7179-6.2347-1.5075-2.1884 0.21041-4.2427 1.1499-5.8332 2.6678-1.5905 1.5179-2.6249 3.526-2.9374 5.7022-0.31241 2.1763 0.11534 4.3944 1.2146 6.2983 1.0993 1.904 2.8063 3.3835 4.8472 4.2011 2.0409 0.8175 4.2972 0.9257 6.407 0.3073 2.1097-0.6185 3.9505-1.9278 5.2269-3.7179 1.2765-1.79 1.9146-3.957 1.8119-6.1531z" />
    </svg>
  );

  let content;

  if (labelIcon) {
    content = (
      <>
        {svg}
        {label}
      </>
    );
  } else if (icon || iconCircle) {
    content = svg;
  } else content = label;

  return (
    <button
      type="button"
      className={[
        "btn",
        `btn--${getLowerWord(backgroundColor)}`,
        `${(loader && `btn--loader`) || ""}`,
        `${(labelIcon && "btn--labelIcon") || ""}`,
        `${(icon && "btn--icon") || ""}`,
        `${(iconCircle && `btn--iconCircle`) || ""}`,
      ].join(" ")}
      disabled={disabled && true}
    >
      {content}
      {loader && loaderIcon}
    </button>
  );
};

export const ButtonCollection = ({
  backgroundColor,
  label,
  disabled,
  loader,
}: IButtonCollection) => {
  return (
    <Wrapper block="button" modificator={getLowerWord(backgroundColor)}>
      <Button
        backgroundColor={backgroundColor}
        label={label}
        disabled={disabled}
        loader={loader}
      />
      <Button
        backgroundColor={backgroundColor}
        label={label}
        labelIcon
        disabled={disabled}
        loader={loader}
      />
      <Button
        backgroundColor={backgroundColor}
        label={label}
        icon
        disabled={disabled}
        loader={loader}
      />
      <Button
        backgroundColor={backgroundColor}
        label={label}
        iconCircle
        disabled={disabled}
        loader={loader}
      />
    </Wrapper>
  );
};
