import { ref, onMounted, onUnmounted } from "vue";

export function useScrollHeader(threshold = 64) {
  const isScrolled = ref(false);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > threshold;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { isScrolled };
}
