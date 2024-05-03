import React from "react";

import { Loader } from "lucide-react";
import { Button } from "./ui/button";
interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  loading: boolean;
}

export default function LoadingButton({
  children,
  loading,
  ...props
}: LoadingButtonProps) {
  return (
    <Button {...props} type="submit" disabled={props.disabled || loading}>
      <span className="flex items-center">
        {loading && <Loader className="size-6 animate-spin gap-2" />}
        {!loading && children}
      </span>
    </Button>
  );
}