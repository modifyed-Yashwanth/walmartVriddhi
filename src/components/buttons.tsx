import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  target?: string;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  inverseRole?: boolean;
}

const resolveVariant = (
  variant: "primary" | "secondary" = "primary",
  inverseRole?: boolean
): "primary" | "secondary" => {
  if (!inverseRole) return variant;
  return variant === "primary" ? "secondary" : "primary";
};

export const PrimaryButton = ({
  text,
  href,
  className,
  disabled,
  onClick,
  variant = "primary",
  inverseRole,
}: ButtonProps) => {
  const finalVariant = resolveVariant(variant, inverseRole);

  const baseClasses = clsx(
    "px-[20px] py-[10px] font-[400] rounded-full transition-all text-[14px] leading-[1.2] text-center cursor-pointer shadow",
    {
      "bg-[#0053E2] text-white": finalVariant === "primary",
      "bg-white text-[#001e60]": finalVariant === "secondary",
    },
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        onClick={onClick}
        target="_blank"
      >
        {text}
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} disabled={disabled}>
      {text}
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
  variant = "primary",
  inverseRole,
}: ButtonProps) => {
  const finalVariant = resolveVariant(variant, inverseRole);

  const baseClasses = clsx(
    "px-[20px] py-[10px] font-[400] rounded-full transition-all text-[14px] leading-[1.2] text-center cursor-pointer",
    {
      "bg-[#0053E2] text-white ring ring-[#0053E2] hover:ring-2":
        finalVariant === "primary",
      "bg-white text-[#2E2F32] ring ring-[#2E2F32] hover:ring-2":
        finalVariant === "secondary",
    },
    {
      "pointer-events-none opacity-50 w-max": disabled,
    },
    className
  );

  if (href) {
    return (
      <Link href={href} target={target || "_self"} className={baseClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export const BannerButton = ({
  text,
  href,
  className,
  target,
  disabled,
  onClick,
}: ButtonProps) => {
  const baseClasses = clsx(
    "px-[20px] py-[10px] font-[400] rounded-full transition-all text-[14px] leading-[1.2] text-center cursor-pointer bg-white text-[#0053E2]",
    {
      "pointer-events-none opacity-50": disabled,
    },
    className
  );

  if (href) {
    return (
      <Link href={href} target={target || "_self"} className={baseClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
