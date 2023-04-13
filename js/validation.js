$().ready(function () {
    $("#login-form").validate({
        rules: {
        //   fname: 'required',
        //   lname: 'required',
          email: {
            required: true,
            email: true,
          },
          password: {
            required: true,
            minlength: 8,
          }
        },
        messages: {
        //   fname: 'This field is required',
        //   lname: 'This field is required',
          user_email: 'Enter a valid email',
          psword: {
            minlength: 'Password must be at least 8 characters long'
          }
        },
        submitHandler: function(form) {
          form.submit();
        }
      });
      $("#p-reset-form").validate({
        rules: {
        //   fname: 'required',
        //   lname: 'required',
        pass1: {
            required: true,
            minlength: 5
        },
        pass2: {
            required: true,
            minlength: 5,
            equalTo: "#pass1" //for checking both passwords are same or not
        },
        },
        messages: {
        //   fname: 'This field is required',
        //   lname: 'This field is required',
        pass1: {
            required: " Please enter a password",
            minlength: " Your password must be consist of at least 5 characters"
        },
        pass2: {
            required: " Please enter a password",
            minlength: " Your password must be consist of at least 5 characters",
            equalTo: " Please enter the same password as above"
        },
        },
        submitHandler: function(form) {
          form.submit();
        }
      });
})

