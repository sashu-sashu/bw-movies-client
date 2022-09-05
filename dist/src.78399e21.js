// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/login-view/login-view.scss":[function(require,module,exports) {

},{}],"components/login-view/login-view.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginView = LoginView;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _reactBootstrap = require("react-bootstrap");

require("./login-view.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function LoginView(props) {
  const [username, setUsername] = (0, _react.useState)('');
  const [password, setPassword] = (0, _react.useState)('');

  const handleSubmit = e => {
    e.preventDefault();
    /* Send a request to the server for authentication */

    console.log(username, password, props);

    _axios.default.post('https://bw-movies-server.herokuapp.com/login', {
      Username: username,
      Password: password
    }).then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    }).catch(e => {
      console.log(e.target, 'no such user');
    });
  };

  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    fluid: true,
    className: "loginContainer my-3 mx-12 "
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    bg: "light",
    expand: "lg"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, {
    href: "#home"
  }, "Top 10 BW Movies"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "me-auto"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "#Register"
  }, "Register"))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.CardGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, {
    className: "mt-3 "
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Title, null, "Welcome to Top 10 BW Movies"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    controlId: "formUserName"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "Username:"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "text",
    onChange: e => setUsername(e.target.value),
    required: true,
    placeholder: "Enter Username"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    controlId: "formPassword"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "Password:"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "password",
    onChange: e => setPassword(e.target.value),
    required: true,
    placeholder: "Enter Password"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "mt-3",
    variant: "primary",
    type: "submit",
    onClick: handleSubmit
  }, "Submit"))))))));
}

LoginView.propTypes = {
  user: _propTypes.default.shape({
    username: _propTypes.default.string.isRequired,
    password: _propTypes.default.string.isRequired
  }),
  onLoggedIn: _propTypes.default.func.isRequired
};
},{"./login-view.scss":"components/login-view/login-view.scss"}],"components/registration-view/registration-view.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegistrationView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

require("./registration-view.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RegistrationView = props => {
  const [username, setUsername] = (0, _react.useState)('');
  const [password, setPassword] = (0, _react.useState)('');
  const [email, setEmail] = (0, _react.useState)('');
  const [birthday, setBirthday] = (0, _react.useState)('');
  console.log(props);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */

    /* then call props.onLoggedIn(username) */
    // props.onLoggedIn(username);
  };

  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    fluid: true,
    className: "registerContainer text-center my-3 mx-12"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    bg: "light",
    expand: "lg"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, {
    href: "#home"
  }, "Top 10 Movies"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "me-auto"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "#login"
  }, "Login"))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.CardGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Title, {
    className: "text-center"
  }, "Please Register"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    className: "mb-3",
    controlId: "'formBasicUsername'"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "Username:", /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "text",
    value: username,
    onChange: e => setUsername(e.target.value),
    placeholder: "Enter Username",
    required: true,
    minLength: "4"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    className: "mb-3",
    controlId: "formBasicPassword"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, ' ', "Password:", /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: "Enter Password",
    required: true,
    minLength: "8"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    className: "mb-3",
    controlId: "formBasicEmail"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "Email:", /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "example@email.com",
    required: true
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    className: "mb-3",
    controlId: "formBasicBirthday"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "Birthdate:", /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "date",
    value: birthday,
    onChange: e => setBirthday(e.target.value),
    placeholder: "30.01.1990",
    required: true
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    type: "submit",
    onClick: handleSubmit
  }, "Register"))))))));
};

exports.RegistrationView = RegistrationView;
RegistrationView.propTypes = {
  onRegistration: _propTypes.default.func.isRequired
};
},{"./registration-view.scss":"components/login-view/login-view.scss"}],"components/movie-view/movie-view.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieView = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

require("./movie-view.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
class MovieView extends _react.default.Component {
  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.keypressCallback);
  }

  render() {
    const {
      movie,
      onBackClick
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "movie-view"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "movie-poster"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: movie.ImagePath
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "movie-title"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "label"
    }, "Title: "), /*#__PURE__*/_react.default.createElement("span", {
      className: "value"
    }, movie.Title)), /*#__PURE__*/_react.default.createElement("div", {
      className: "movie-description"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "label"
    }, "Description: "), /*#__PURE__*/_react.default.createElement("span", {
      className: "value"
    }, movie.Description)), /*#__PURE__*/_react.default.createElement("div", {
      className: "movie-director"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "label"
    }, "Director: "), /*#__PURE__*/_react.default.createElement("span", {
      className: "value"
    }, movie.Director.Name + " ~ " + movie.Director.Bio)), /*#__PURE__*/_react.default.createElement("div", {
      className: "movie-genre"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "label"
    }, "Genre: "), /*#__PURE__*/_react.default.createElement("span", {
      className: "value"
    }, movie.Genre.Name + " ~ " + movie.Genre.Description)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      className: "mt-4",
      onClick: () => {
        onBackClick(null);
      }
    }, "Back"));
  }

}

exports.MovieView = MovieView;
MovieView.propTypes = {
  user: _propTypes.default.shape({
    username: _propTypes.default.string.isRequired,
    password: _propTypes.default.string.isRequired
  }),
  movie: _propTypes.default.shape({
    Title: _propTypes.default.string.isRequired,
    Description: _propTypes.default.string.isRequired,
    Genre: _propTypes.default.shape({
      Name: _propTypes.default.string.isRequired,
      Description: _propTypes.default.string.isRequired
    }),
    Director: _propTypes.default.shape({
      Name: _propTypes.default.string.isRequired,
      Bio: _propTypes.default.string.isRequired,
      Birth: _propTypes.default.string.isRequired,
      Death: _propTypes.default.string
    }),
    ImagePath: _propTypes.default.string.isRequired
  }).isRequired,
  onBackClick: _propTypes.default.func.isRequired
};
},{"./movie-view.scss":"components/login-view/login-view.scss"}],"components/movie-card/movie-card.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

require("./movie-card.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MovieCard extends _react.default.Component {
  render() {
    const {
      movie,
      onMovieClick
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
      fluid: true,
      className: "movieCardContainer"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.CardGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
      className: "movieCard mt-3 mb-3"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Img, {
      variant: "top",
      src: movie.ImagePath
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Title, null, movie.Title), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, null, movie.Description), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      onClick: () => onMovieClick(movie),
      variant: "link"
    }, "Open")))))));
  }

}

exports.MovieCard = MovieCard;
MovieCard.propTypes = {
  movie: _propTypes.default.shape({
    Title: _propTypes.default.string.isRequired,
    Description: _propTypes.default.string.isRequired,
    ImagePath: _propTypes.default.string.isRequired,
    Genre: _propTypes.default.shape({
      Name: _propTypes.default.string.isRequired,
      Description: _propTypes.default.string.isRequired
    }),
    Director: _propTypes.default.shape({
      Name: _propTypes.default.string.isRequired,
      Bio: _propTypes.default.string.isRequired,
      Birth: _propTypes.default.string.isRequired,
      Death: _propTypes.default.string
    })
  }).isRequired,
  onMovieClick: _propTypes.default.func.isRequired
};
},{"./movie-card.scss":"components/login-view/login-view.scss"}],"components/main-view/main-view.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainView = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _loginView = require("../login-view/login-view");

var _registrationView = require("../registration-view/registration-view");

var _movieView = require("../movie-view/movie-view");

var _movieCard = require("../movie-card/movie-card");

var _reactBootstrap = require("react-bootstrap");

require("./main-view.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MainView extends _react.default.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      user: null,
      selectedMovie: null
    };
  }

  componentDidMount() {
    _axios.default.get('https://bw-movies-server.herokuapp.com/movies').then(response => {
      this.setState({
        movies: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onRegistration(registered) {
    this.setState({
      registered
    });
  }

  render() {
    const {
      movies,
      selectedMovie,
      user,
      registered
    } = this.state;
    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are passed as a prop to the LoginView*/

    if (!user) return /*#__PURE__*/_react.default.createElement(_loginView.LoginView, {
      onLoggedIn: user => this.onLoggedIn(user)
    });
    if (movies.length === 0) return /*#__PURE__*/_react.default.createElement("div", {
      className: "main-view"
    });
    if (!registered) return /*#__PURE__*/_react.default.createElement(_registrationView.RegistrationView, {
      onRegistration: register => this.onRegistration(register)
    });
    if (selectedMovie) return /*#__PURE__*/_react.default.createElement(_movieView.MovieView, {
      movie: selectedMovie,
      onBackClick: newSelectedMovie => {
        this.setSelectedMovie(newSelectedMovie);
      }
    }); // Before the movies have been loaded

    if (movies.length === 0) return /*#__PURE__*/_react.default.createElement("div", {
      className: "main-view"
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "main-view"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
      bg: "light",
      expand: "lg"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
      fluid: true
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, {
      href: "#home"
    }, "Top 10 Movies"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Toggle, {
      "aria-controls": "basic-navbar-nav"
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Collapse, {
      id: "basic-navbar-nav"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
      className: "me-auto"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
      href: "#profile"
    }, "Profile"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
      href: "#update"
    }, "Edit Profile"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
      href: "#logout"
    }, "Logout"))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
      fluid: true,
      className: "mainViewContainer"
    }, selectedMovie ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
      className: "justify-content-md-center"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      md: 8
    }, /*#__PURE__*/_react.default.createElement(_movieView.MovieView, {
      movie: selectedMovie,
      onBackClick: newSelectedMovie => {
        this.setSelectedMovie(newSelectedMovie);
      }
    }))) : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
      className: "justify-content-md-center"
    }, movies.map(movie => /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
      key: movie._id,
      lg: 3,
      md: 4,
      sm: 6
    }, /*#__PURE__*/_react.default.createElement(_movieCard.MovieCard, {
      movie: movie,
      onMovieClick: newSelectedMovie => {
        this.setSelectedMovie(newSelectedMovie);
      }
    }))))));
  }

}

exports.MainView = MainView;
_movieCard.MovieCard.propTypes = {
  movie: _propTypes.default.shape({
    Title: _propTypes.default.string.isRequired,
    Description: _propTypes.default.string.isRequired,
    ImagePath: _propTypes.default.string.isRequired,
    Director: _propTypes.default.shape({
      Name: _propTypes.default.string.isRequired,
      Bio: _propTypes.default.string.isRequired,
      Birth: _propTypes.default.string.isRequired,
      Death: _propTypes.default.string
    }),
    Genre: _propTypes.default.shape({
      Name: _propTypes.default.string.isRequired,
      Description: _propTypes.default.string.isRequired
    })
  }).isRequired
};
},{"../login-view/login-view":"components/login-view/login-view.jsx","../registration-view/registration-view":"components/registration-view/registration-view.jsx","../movie-view/movie-view":"components/movie-view/movie-view.jsx","../movie-card/movie-card":"components/movie-card/movie-card.jsx","./main-view.scss":"components/login-view/login-view.scss"}],"index.jsx":[function(require,module,exports) {
"use strict";

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

var _mainView = require("./components/main-view/main-view");

var _Container = _interopRequireDefault(require("react-bootstrap/Container"));

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Bootstrap Bundle JS
// Import statement to indicate that you need to bundle `./index.scss`
// Main component (will eventually use all the others)
class BWMoviesApplication extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_Container.default, null, /*#__PURE__*/_react.default.createElement(_mainView.MainView, null));
  }

} // Finds the root of your app


const container = document.getElementById('root');

const root = _client.default.createRoot(container);

root.render( /*#__PURE__*/_react.default.createElement(BWMoviesApplication, null));
},{"./components/main-view/main-view":"components/main-view/main-view.jsx","./index.scss":"components/login-view/login-view.scss"}]},{},["index.jsx"], null)
//# sourceMappingURL=/src.78399e21.js.map