import { reactive } from "vue";

export default function useLoader({
  initiallyLoading = false,
  color = "red",
}: {
  initiallyLoading: boolean;
  color: string;
}) {

    const loader = reactive({
        loading: initiallyLoading,
        color
    })

    const setLoading = () => {
        loader.loading = true
    }

    const stopLoading = () => {
        loader.loading = false
    }

    return { loader, setLoading, stopLoading }

}
