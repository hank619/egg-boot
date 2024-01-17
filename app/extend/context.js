/*
 * @Author: Hong.Zhang
 * @Date: 2024-01-15 18:58:33
 * @Description:
 */
module.exports = {
  success(data) {
    this.body = {
      success: true,
      data,
    };
    this.status = 200;
  },
  fail(message = "", status = 500, data = {}) {
    this.body = {
      success: false,
      data,
      message,
    };
    this.status = status;
  },
};

/**
 * stand response

  status: 200 / 422 / 500
  {
    data: xxx,
    message: xxx,
    success: true / false,
  }

 */
