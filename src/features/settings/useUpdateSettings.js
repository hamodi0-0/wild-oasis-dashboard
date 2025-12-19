import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSettings, isPending: isUpdating } = useMutation({
    mutationFn: (newSetting) => updateSetting(newSetting),
    onSuccess: () => {
      toast.success("Settings updated succesfully");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSettings };
}
