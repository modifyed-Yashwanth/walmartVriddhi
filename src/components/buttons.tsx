import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  target?: string; // For links, e.g., "_blank" for opening in a new tab
  disabled?: boolean;
  onClick?: () => void;
}

export const PrimaryButton = ({
  text,
  href,
  className,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `px-[24px] py-[10px] font-[600] rounded-full min-w-[200px] w-max transition-all text-[14px] leading-[18px] bg-[#0053e2] shadow text-center cursor-pointer`,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {href ? <Link href={href}>{text}</Link> : text}
    </button>
  );
};

export const SecondaryButton = ({
  text,
  href,
  className,
  target,
  disabled,
  onClick,
}: ButtonProps) => {
  const isBlueButton = className?.includes("bg-[#0053e2]");

  const baseClasses =
    "px-[24px] py-[10px] font-[600] rounded-full min-w-[200px] w-max transition-all text-[14px] leading-[18px] cursor-pointer text-[#2E2F32] text-center";

  const combinedClasses = clsx(
    baseClasses,
    !isBlueButton && "ring ring-[#2E2F32] hover:ring-2",
    isBlueButton && "text-white hover:shadow-sm border-1 border-[#0053e2]",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target ? target : "_self"}
        className={clsx(combinedClasses, {
          "pointer-events-none opacity-50 w-max": disabled,
        })}
      >
        {text}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
