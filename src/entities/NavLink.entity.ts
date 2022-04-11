import { ReactNode } from "react";

export default interface NavLinkEntity {
  to: string,
  label: string,
  icon: any,
  children?: ReactNode;
}
