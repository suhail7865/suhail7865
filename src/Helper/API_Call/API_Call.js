import axios, {Axios} from 'axios';
import {BaseUrl} from '../API_Config/baseUrl';
import {UserList, VenderList} from '../API_List/API_List';

export const LoginUser = async phone => {
  return axios({
    method: 'POST',
    url: BaseUrl.SolvekarURL +  UserList.LoginUser,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      phone: phone,
      is_social: 0,
    }),
  })
    .then(function (response) {
      console.log(response, '-------------respon')
      return response;
      //    console.log("response.status")
      //    console.log(response)
      //return console.log(response)
    })
    .catch(function (error) {
      console.log('error.response');
      //return error.response
    });
};

//User Match Otp

export const MatchOtp = async (phone, value) => {
  return axios({
    method: 'POST',
    url: BaseUrl.SolvekarURL +  UserList.UserMatcthOtp,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      phone: phone,
      otp: value,
    }),
  })
    .then(function (response) {
      
      return response;
    })
    .catch(function (error) {
      console.log('error.response');
      console.log(error.response);
      //return error.response
    });
};

//////////Signup api data////////////

export const SignUp = async (name, email, phone) => {
  return axios({
    method: 'POST',
    url: BaseUrl.SolvekarURL + UserList.SignupUser,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
    }),
  })
    .then(function (response) {
      console.log(response, '--------response')
      return response;
    })
    .catch(function (error) {
      console.log('error.response');
      console.log(error.response);
      //return error.response
    });
};
//////////banner data////////////
export const getBannerData = async () => {
  let config = {
    method: 'GET',
    url: BaseUrl.SolvekarURL + UserList.getBanner,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
//////////category data////////////
export const getCategoryData = async (action, city, category_icon) => {
  let url_data = '';
  if (action != undefined && city != undefined) {
    url_data = '?action=' + action + '&city=' + city;
  }
  let config = {
    method: 'GET',
    url: BaseUrl.SolvekarURL + UserList.getCategory + url_data,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
//////////top_consultant data////////////
export const getTopConsultantData = async () => {
  let config = {
    method: 'GET',
    url: BaseUrl.SolvekarURL + UserList.topConsaltant,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
//////////speciality data////////////
export const getSpecialityData = async () => {
  let config = {
    method: 'GET',
    url: 'http://solvekar.com/webservices2/speciality_passion.php',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
//////////get all city data////////////
export const getcityData = async (action, target) => {
  let config = {
    method: 'GET',
    url:
      'http://solvekar.com/webservices2/get_all_city.php?action=' +
      action +
      '&city=' +
      target,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

//////////get Your Appointment data////////////

export const getYourAppointment = async (action, target) => {
  let config = {
    method: 'GET',
    url: 'http://solvekar.com/webservices2/get_user_appointments.php?user_id=75',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

//////////get blog data////////////

export const getBlogData = async blog_id => {

  let config = {
    method: 'GET',
    url: 'http://solvekar.com/webservices2/get_blogs.php?blog_id=' + blog_id,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  console.log(config.url, '-------config')
  return axios(config)
  .then(function (response) {
    //console.log(response, "...................blog response");
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

//////////get Venders data////////////

export const getVendersData = async categoryId => {
  let config = {
    method: 'GET',
    url:
      'http://solvekar.com/webservices2/get_consultants_by_category_id.php?category_id=' +
      categoryId,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

//////////get Consaltant Details and Docter Detils data////////////

export const getDocterDetailsData = async categoryId => {
  let config = {
    method: 'GET',
    url: 'http://solvekar.com/webservices2/get_consultant_detail_by_id.php?consultant_id='+categoryId,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return axios(config)
    .then(function (response) {
      // console.log(config, '---------config')
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

//////////get Vender All Appoitnment data////////////

export const getAllAppointmentData = async categoryId => {
  let config = {
    method: 'GET',
    url: 'http://solvekar.com/webservices2/appointment_status.php?appointment_status',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return axios(config)
    .then(function (response) {
      // console.log(config, '---------config')
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

//////////send User Profile data////////////

export const UserProfile = async (name, phone, email, user_id, image) => {
  let data = new FormData();

  let image_data = {
    uri: image.path,
    type: image.mime,
    name:
      image.mime !== 'image/jpeg'
        ? `filename${Math.random().toString(36).substring(7)}.mp4`
        : `filename${Math.random().toString(36).substring(7)}.jpg`,
  };
  // data.append('full_name',name);
  // data.append('email',email);
  // data.append('user_id',user_id);
  // data.append('phone',phone);

  let config = {
    method: 'POST',
    url: 'http://solvekar.com/webservices2/update_user_profile.php',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data;application/json',
    },
    data: JSON.stringify({
      name: name,
      email: email,
      user_id: user_id,
      phone: phone,
      file: image_data,
    }),
  };

  console.log(config, '............................config');

  return axios(config)
    .then(function (response) {
      console.log(response, '-------data');
      return response;
    })
    .catch(function (error) {
      console.log('error.response');
      console.log(error.response);
      //return error.response
    });
};
/////////get Profile data////////////
export const getProfileData = async user_id => {
  let config = {
    url:
      'http://solvekar.com/webservices2/get_user_profile.php?user_id=' +
      user_id,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return axios(config)
    .then(function (response) {
      console.log(config, '-------data');
      return response;
    })
    .catch(function (error) {
      console.log(error);

      //return error.response
    });
};

/////////get dashboard data////////////

export const getDashboardData = async action => {
  let config = {
    method: 'GET',
    url: 'http://solvekar.com/webservices2/get_dashboardData.php',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return axios(config)
    .then(function (response) {
      console.log(config, '---------config');
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

/////////get Vender Profile data////////////

export const getVenderProfileData = async vender_id => {
  let config = {
    url: 'http://solvekar.com/webservices2/profileByVendorId.php?vendor_id='+vender_id+'&action=getAllDataByVendorId',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return axios(config)
    .then(function (response) {
      console.log(config, '-------data');
      return response;
    })
    .catch(function (error) {
      console.log(error);

      //return error.response
    });
};

// export const RagisterVender = async (name, email, mobile, password) => {
//   return axios({
//     method: 'POST',
//     url: 'http://solvekar.com/webservices2/vender_registration.php',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     config: JSON.stringify({
//       name: name,
//       email: email,
//       mobile: mobile,
//       password: password,
//     }),
//   })

//     .then(function (response) {
//       console.log(config, '----resop')
//       return response;
//     })
//     .catch(function (error) {
//       console.log('error.response');
//       console.log(error.response);
//       //return error.response
//     });
// };
export const RagisterVender = async (
  name,
  email,
  mobile,
  password,
  profession,
) => {
  let config = {
    method: 'POST',
    url:
      'http://solvekar.com/webservices2/vender_registration.php', 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      name: name,
      email: email,
      mobile: mobile,
      password: password,
      profession: profession,
    }),
  };
  console.log(config, '-------config');
  return axios(config)
    .then(function (response) {
      console.log(response.data, '-----then.res');

      return response;
    })
    .catch(function (error) {
      //console.log('error.response')
      //console.log(error);
      //return error.response
    });
};

/////////Vender Login data////////////


export const LoginVender = async (email, password) => {
  let config = {
    method: 'POST',
    url: 'http://solvekar.com/webservices2/vender_login.php',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      email: email,
      password: password,
    }),
  };

/////////Vender Edit Profiledata////////////
  
  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log('errorCatch');
      console.log(error);

      return error;
    });
};


export const VenderProfile = async (name, mobile, email, user_id, image) => {
  let data = new FormData();

  // let image_data = {
  //   uri: image.path,
  //   type: image.mime,
  //   name:
  //     image.mime !== 'image/jpeg'
  //       ? `filename${Math.random().toString(36).substring(7)}.mp4`
  //       : `filename${Math.random().toString(36).substring(7)}.jpg`,
  // };
  

  let config = {
    method: 'POST',
    url: BaseUrl.SolvekarURL + VenderList.venderProfile,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data;application/json',
    },
    data: JSON.stringify({
      name: name,
      email: email,
      user_id: user_id,
      phone: phone,
      // file: image_data,
    }),
  };

  console.log(config, '............................config');

  return axios(config)
    .then(function (response) {
      console.log(response, '-------data');
      return response;
    })
    .catch(function (error) {
      console.log('error.response');
      console.log(error.response);
      //return error.response
    });
};