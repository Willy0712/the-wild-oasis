import { useMutation } from "@tanstack/react-query";
import { signup as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      // Redirect to the dashboard after successful sign-up
      // This is a placeholder for the actual redirect
      toast.success(
        "Sign up successful! Please check your email to verify your account."
      );
    },
  });
  return {
    signUp,
    isLoading,
  };
}
