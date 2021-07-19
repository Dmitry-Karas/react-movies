import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timerProgressBar: true,
  width: 420,
});

export class Notify {
  static async error(title, text, timer = 3000) {
    await Toast.fire({
      icon: "error",
      timer,
      title,
      text,
    });
  }

  static async success(title, text, timer = 3000) {
    await Toast.fire({
      icon: "success",
      timer,
      title,
      text,
    });
  }

  static async warning(title, text, timer = 3000) {
    await Toast.fire({
      icon: "warning",
      timer,
      title,
      text,
    });
  }

  static async info(title, message, timer = 3000) {
    await Toast.fire({
      icon: "info",
      timer,
      title,
      text: message,
    });
  }

  static async question(title, message, timer = 3000) {
    await Toast.fire({
      icon: "question",
      timer,
      title,
      text: message,
    });
  }
}
