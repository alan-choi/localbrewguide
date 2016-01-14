import $ from 'jquery';
import ApiActions from './../actions/apiActions';

class ApiUtil {
  loadDatabase() {
    $.ajax({
      url: '/api/breweries',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        ApiActions.initialLoad(data);
      }
    });
  }


  //remove

}

export default new ApiUtil();
