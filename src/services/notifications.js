import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})

export class Notify {
  static async error(title, message) {
    await Toast.fire({
      icon: 'error',
      title,
      text: message,
    })
  }

  static async success(title, message) {
    await Toast.fire({
      icon: 'success',
      title,
      text: message,
    })
  }

  static async warning(title, message) {
    await Toast.fire({
      icon: 'warning',
      title,
      text: message,
    })
  }

  static async info(title, message) {
    await Toast.fire({
      icon: 'info',
      title,
      text: message,
    })
  }

  static async question(title, message) {
    await Toast.fire({
      icon: 'question',
      title,
      text: message,
    })
  }
}
