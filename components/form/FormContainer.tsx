/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { actionFunction } from "@/utils/types";
const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  console.log(state);
  const { toast } = useToast();
  console.log(toast);
  useEffect(() => {
    if (state.message) {
      toast({
        description: state.message,
      });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
