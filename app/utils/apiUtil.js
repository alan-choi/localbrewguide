import $ from 'jquery';

class ApiUtil {
  get(url) {
    return new Promise((success, error) => {
      $.ajax({
        url: url,
        type: "GET",
        dataType: 'json',
        success: success,
        error: error
      });
    });
  }

  //post
  //patch
  //remove

}

export default new ApiUtil();
