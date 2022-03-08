(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_material_course"] = self["webpackChunkangular_material_course"] || []).push([["src_app_inbox_inbox_module_ts"], {
    /***/
    52529: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ICON_REGISTRY_PROVIDER": function ICON_REGISTRY_PROVIDER() {
          return (
            /* binding */
            _ICON_REGISTRY_PROVIDER
          );
        },

        /* harmony export */
        "ICON_REGISTRY_PROVIDER_FACTORY": function ICON_REGISTRY_PROVIDER_FACTORY() {
          return (
            /* binding */
            _ICON_REGISTRY_PROVIDER_FACTORY
          );
        },

        /* harmony export */
        "MAT_ICON_LOCATION": function MAT_ICON_LOCATION() {
          return (
            /* binding */
            _MAT_ICON_LOCATION
          );
        },

        /* harmony export */
        "MAT_ICON_LOCATION_FACTORY": function MAT_ICON_LOCATION_FACTORY() {
          return (
            /* binding */
            _MAT_ICON_LOCATION_FACTORY
          );
        },

        /* harmony export */
        "MatIcon": function MatIcon() {
          return (
            /* binding */
            _MatIcon
          );
        },

        /* harmony export */
        "MatIconModule": function MatIconModule() {
          return (
            /* binding */
            _MatIconModule
          );
        },

        /* harmony export */
        "MatIconRegistry": function MatIconRegistry() {
          return (
            /* binding */
            _MatIconRegistry
          );
        },

        /* harmony export */
        "getMatIconFailedToSanitizeLiteralError": function getMatIconFailedToSanitizeLiteralError() {
          return (
            /* binding */
            _getMatIconFailedToSanitizeLiteralError
          );
        },

        /* harmony export */
        "getMatIconFailedToSanitizeUrlError": function getMatIconFailedToSanitizeUrlError() {
          return (
            /* binding */
            _getMatIconFailedToSanitizeUrlError
          );
        },

        /* harmony export */
        "getMatIconNameNotFoundError": function getMatIconNameNotFoundError() {
          return (
            /* binding */
            _getMatIconNameNotFoundError
          );
        },

        /* harmony export */
        "getMatIconNoHttpProviderError": function getMatIconNoHttpProviderError() {
          return (
            /* binding */
            _getMatIconNoHttpProviderError
          );
        },

        /* harmony export */
        "ɵ0": function ɵ0() {
          return (
            /* binding */
            _ɵ
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      42720);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      94283);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      71435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      11355);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an exception to be thrown in the case when attempting to
       * load an icon with a name that cannot be found.
       * @docs-private
       */


      var _c0 = ["*"];

      function _getMatIconNameNotFoundError(iconName) {
        return Error("Unable to find icon with the name \"".concat(iconName, "\""));
      }
      /**
       * Returns an exception to be thrown when the consumer attempts to use
       * `<mat-icon>` without including @angular/common/http.
       * @docs-private
       */


      function _getMatIconNoHttpProviderError() {
        return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
      }
      /**
       * Returns an exception to be thrown when a URL couldn't be sanitized.
       * @param url URL that was attempted to be sanitized.
       * @docs-private
       */


      function _getMatIconFailedToSanitizeUrlError(url) {
        return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
      }
      /**
       * Returns an exception to be thrown when a HTML string couldn't be sanitized.
       * @param literal HTML that was attempted to be sanitized.
       * @docs-private
       */


      function _getMatIconFailedToSanitizeLiteralError(literal) {
        return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
      }
      /**
       * Configuration for an icon, including the URL and possibly the cached SVG element.
       * @docs-private
       */


      var SvgIconConfig = function SvgIconConfig(url, svgText, options) {
        _classCallCheck(this, SvgIconConfig);

        this.url = url;
        this.svgText = svgText;
        this.options = options;
      };
      /**
       * Service to register and display icons used by the `<mat-icon>` component.
       * - Registers icon URLs by namespace and name.
       * - Registers icon set URLs by namespace.
       * - Registers aliases for CSS classes, for use with icon fonts.
       * - Loads icons from URLs and extracts individual icons from icon sets.
       */


      var _MatIconRegistry = /*#__PURE__*/function () {
        function _MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
          _classCallCheck(this, _MatIconRegistry);

          this._httpClient = _httpClient;
          this._sanitizer = _sanitizer;
          this._errorHandler = _errorHandler;
          /**
           * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
           */

          this._svgIconConfigs = new Map();
          /**
           * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
           * Multiple icon sets can be registered under the same namespace.
           */

          this._iconSetConfigs = new Map();
          /** Cache for icons loaded by direct URLs. */

          this._cachedIconsByUrl = new Map();
          /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */

          this._inProgressUrlFetches = new Map();
          /** Map from font identifiers to their CSS class names. Used for icon fonts. */

          this._fontCssClassesByAlias = new Map();
          /** Registered icon resolver functions. */

          this._resolvers = [];
          /**
           * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
           * The default 'material-icons' value assumes that the material icon font has been loaded as
           * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
           */

          this._defaultFontSetClass = 'material-icons';
          this._document = document;
        }
        /**
         * Registers an icon by URL in the default namespace.
         * @param iconName Name under which the icon should be registered.
         * @param url
         */


        _createClass(_MatIconRegistry, [{
          key: "addSvgIcon",
          value: function addSvgIcon(iconName, url, options) {
            return this.addSvgIconInNamespace('', iconName, url, options);
          }
          /**
           * Registers an icon using an HTML string in the default namespace.
           * @param iconName Name under which the icon should be registered.
           * @param literal SVG source of the icon.
           */

        }, {
          key: "addSvgIconLiteral",
          value: function addSvgIconLiteral(iconName, literal, options) {
            return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
          }
          /**
           * Registers an icon by URL in the specified namespace.
           * @param namespace Namespace in which the icon should be registered.
           * @param iconName Name under which the icon should be registered.
           * @param url
           */

        }, {
          key: "addSvgIconInNamespace",
          value: function addSvgIconInNamespace(namespace, iconName, url, options) {
            return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
          }
          /**
           * Registers an icon resolver function with the registry. The function will be invoked with the
           * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
           * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
           * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
           * will be invoked in the order in which they have been registered.
           * @param resolver Resolver function to be registered.
           */

        }, {
          key: "addSvgIconResolver",
          value: function addSvgIconResolver(resolver) {
            this._resolvers.push(resolver);

            return this;
          }
          /**
           * Registers an icon using an HTML string in the specified namespace.
           * @param namespace Namespace in which the icon should be registered.
           * @param iconName Name under which the icon should be registered.
           * @param literal SVG source of the icon.
           */

        }, {
          key: "addSvgIconLiteralInNamespace",
          value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
            var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal); // TODO: add an ngDevMode check


            if (!cleanLiteral) {
              throw _getMatIconFailedToSanitizeLiteralError(literal);
            }

            return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
          }
          /**
           * Registers an icon set by URL in the default namespace.
           * @param url
           */

        }, {
          key: "addSvgIconSet",
          value: function addSvgIconSet(url, options) {
            return this.addSvgIconSetInNamespace('', url, options);
          }
          /**
           * Registers an icon set using an HTML string in the default namespace.
           * @param literal SVG source of the icon set.
           */

        }, {
          key: "addSvgIconSetLiteral",
          value: function addSvgIconSetLiteral(literal, options) {
            return this.addSvgIconSetLiteralInNamespace('', literal, options);
          }
          /**
           * Registers an icon set by URL in the specified namespace.
           * @param namespace Namespace in which to register the icon set.
           * @param url
           */

        }, {
          key: "addSvgIconSetInNamespace",
          value: function addSvgIconSetInNamespace(namespace, url, options) {
            return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
          }
          /**
           * Registers an icon set using an HTML string in the specified namespace.
           * @param namespace Namespace in which to register the icon set.
           * @param literal SVG source of the icon set.
           */

        }, {
          key: "addSvgIconSetLiteralInNamespace",
          value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
            var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal);

            if (!cleanLiteral) {
              throw _getMatIconFailedToSanitizeLiteralError(literal);
            }

            return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
          }
          /**
           * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
           * component with the alias as the fontSet input will cause the class name to be applied
           * to the `<mat-icon>` element.
           *
           * @param alias Alias for the font.
           * @param className Class name override to be used instead of the alias.
           */

        }, {
          key: "registerFontClassAlias",
          value: function registerFontClassAlias(alias) {
            var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

            this._fontCssClassesByAlias.set(alias, className);

            return this;
          }
          /**
           * Returns the CSS class name associated with the alias by a previous call to
           * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
           */

        }, {
          key: "classNameForFontAlias",
          value: function classNameForFontAlias(alias) {
            return this._fontCssClassesByAlias.get(alias) || alias;
          }
          /**
           * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
           * have a fontSet input value, and is not loading an icon by name or URL.
           *
           * @param className
           */

        }, {
          key: "setDefaultFontSetClass",
          value: function setDefaultFontSetClass(className) {
            this._defaultFontSetClass = className;
            return this;
          }
          /**
           * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
           * have a fontSet input value, and is not loading an icon by name or URL.
           */

        }, {
          key: "getDefaultFontSetClass",
          value: function getDefaultFontSetClass() {
            return this._defaultFontSetClass;
          }
          /**
           * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
           * The response from the URL may be cached so this will not always cause an HTTP request, but
           * the produced element will always be a new copy of the originally fetched icon. (That is,
           * it will not contain any modifications made to elements previously returned).
           *
           * @param safeUrl URL from which to fetch the SVG icon.
           */

        }, {
          key: "getSvgIconFromUrl",
          value: function getSvgIconFromUrl(safeUrl) {
            var _this = this;

            var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl);

            if (!url) {
              throw _getMatIconFailedToSanitizeUrlError(safeUrl);
            }

            var cachedIcon = this._cachedIconsByUrl.get(url);

            if (cachedIcon) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(cachedIcon));
            }

            return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (svg) {
              return _this._cachedIconsByUrl.set(url, svg);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (svg) {
              return cloneSvg(svg);
            }));
          }
          /**
           * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
           * and namespace. The icon must have been previously registered with addIcon or addIconSet;
           * if not, the Observable will throw an error.
           *
           * @param name Name of the icon to be retrieved.
           * @param namespace Namespace in which to look for the icon.
           */

        }, {
          key: "getNamedSvgIcon",
          value: function getNamedSvgIcon(name) {
            var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var key = iconKey(namespace, name);

            var config = this._svgIconConfigs.get(key); // Return (copy of) cached icon if possible.


            if (config) {
              return this._getSvgFromConfig(config);
            } // Otherwise try to resolve the config from one of the resolver functions.


            config = this._getIconConfigFromResolvers(namespace, name);

            if (config) {
              this._svgIconConfigs.set(key, config);

              return this._getSvgFromConfig(config);
            } // See if we have any icon sets registered for the namespace.


            var iconSetConfigs = this._iconSetConfigs.get(namespace);

            if (iconSetConfigs) {
              return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(_getMatIconNameNotFoundError(key));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._resolvers = [];

            this._svgIconConfigs.clear();

            this._iconSetConfigs.clear();

            this._cachedIconsByUrl.clear();
          }
          /**
           * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
           */

        }, {
          key: "_getSvgFromConfig",
          value: function _getSvgFromConfig(config) {
            if (config.svgText) {
              // We already have the SVG element for this icon, return a copy.
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(this._svgElementFromConfig(config)));
            } else {
              // Fetch the icon from the config's URL, cache it, and return a copy.
              return this._loadSvgIconFromConfig(config).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (svg) {
                return cloneSvg(svg);
              }));
            }
          }
          /**
           * Attempts to find an icon with the specified name in any of the SVG icon sets.
           * First searches the available cached icons for a nested element with a matching name, and
           * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
           * that have not been cached, and searches again after all fetches are completed.
           * The returned Observable produces the SVG element if possible, and throws
           * an error if no icon with the specified name can be found.
           */

        }, {
          key: "_getSvgFromIconSetConfigs",
          value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
            var _this2 = this;

            // For all the icon set SVG elements we've fetched, see if any contain an icon with the
            // requested name.
            var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

            if (namedIcon) {
              // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
              // time anyway, there's probably not much advantage compared to just always extracting
              // it from the icon set.
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(namedIcon);
            } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
            // fetched, fetch them now and look for iconName in the results.


            var iconSetFetchRequests = iconSetConfigs.filter(function (iconSetConfig) {
              return !iconSetConfig.svgText;
            }).map(function (iconSetConfig) {
              return _this2._loadSvgIconSetFromConfig(iconSetConfig).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (err) {
                var url = _this2._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.


                var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message);

                _this2._errorHandler.handleError(new Error(errorMessage));

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
              }));
            }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
            // cached SVG element (unless the request failed), and we can check again for the icon.

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(iconSetFetchRequests).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function () {
              var foundIcon = _this2._extractIconWithNameFromAnySet(name, iconSetConfigs); // TODO: add an ngDevMode check


              if (!foundIcon) {
                throw _getMatIconNameNotFoundError(name);
              }

              return foundIcon;
            }));
          }
          /**
           * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
           * tag matches the specified name. If found, copies the nested element to a new SVG element and
           * returns it. Returns null if no matching element is found.
           */

        }, {
          key: "_extractIconWithNameFromAnySet",
          value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
            // Iterate backwards, so icon sets added later have precedence.
            for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
              var config = iconSetConfigs[i]; // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
              // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
              // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
              // some of the parsing.

              if (config.svgText && config.svgText.indexOf(iconName) > -1) {
                var svg = this._svgElementFromConfig(config);

                var foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);

                if (foundIcon) {
                  return foundIcon;
                }
              }
            }

            return null;
          }
          /**
           * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
           * from it.
           */

        }, {
          key: "_loadSvgIconFromConfig",
          value: function _loadSvgIconFromConfig(config) {
            var _this3 = this;

            return this._fetchIcon(config).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (svgText) {
              return config.svgText = svgText;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function () {
              return _this3._svgElementFromConfig(config);
            }));
          }
          /**
           * Loads the content of the icon set URL specified in the
           * SvgIconConfig and attaches it to the config.
           */

        }, {
          key: "_loadSvgIconSetFromConfig",
          value: function _loadSvgIconSetFromConfig(config) {
            if (config.svgText) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
            }

            return this._fetchIcon(config).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (svgText) {
              return config.svgText = svgText;
            }));
          }
          /**
           * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
           * tag matches the specified name. If found, copies the nested element to a new SVG element and
           * returns it. Returns null if no matching element is found.
           */

        }, {
          key: "_extractSvgIconFromSet",
          value: function _extractSvgIconFromSet(iconSet, iconName, options) {
            // Use the `id="iconName"` syntax in order to escape special
            // characters in the ID (versus using the #iconName syntax).
            var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

            if (!iconSource) {
              return null;
            } // Clone the element and remove the ID to prevent multiple elements from being added
            // to the page with the same ID.


            var iconElement = iconSource.cloneNode(true);
            iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
            // the content of a new <svg> node.

            if (iconElement.nodeName.toLowerCase() === 'svg') {
              return this._setSvgAttributes(iconElement, options);
            } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
            // that the same could be achieved by referring to it via <use href="#id">, however the <use>
            // tag is problematic on Firefox, because it needs to include the current page path.


            if (iconElement.nodeName.toLowerCase() === 'symbol') {
              return this._setSvgAttributes(this._toSvgElement(iconElement), options);
            } // createElement('SVG') doesn't work as expected; the DOM ends up with
            // the correct nodes, but the SVG content doesn't render. Instead we
            // have to create an empty SVG node using innerHTML and append its content.
            // Elements created using DOMParser.parseFromString have the same problem.
            // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display


            var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


            svg.appendChild(iconElement);
            return this._setSvgAttributes(svg, options);
          }
          /**
           * Creates a DOM element from the given SVG string.
           */

        }, {
          key: "_svgElementFromString",
          value: function _svgElementFromString(str) {
            var div = this._document.createElement('DIV');

            div.innerHTML = str;
            var svg = div.querySelector('svg'); // TODO: add an ngDevMode check

            if (!svg) {
              throw Error('<svg> tag not found');
            }

            return svg;
          }
          /**
           * Converts an element into an SVG node by cloning all of its children.
           */

        }, {
          key: "_toSvgElement",
          value: function _toSvgElement(element) {
            var svg = this._svgElementFromString('<svg></svg>');

            var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

            for (var i = 0; i < attributes.length; i++) {
              var _attributes$i = attributes[i],
                  name = _attributes$i.name,
                  value = _attributes$i.value;

              if (name !== 'id') {
                svg.setAttribute(name, value);
              }
            }

            for (var _i = 0; _i < element.childNodes.length; _i++) {
              if (element.childNodes[_i].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[_i].cloneNode(true));
              }
            }

            return svg;
          }
          /**
           * Sets the default attributes for an SVG element to be used as an icon.
           */

        }, {
          key: "_setSvgAttributes",
          value: function _setSvgAttributes(svg, options) {
            svg.setAttribute('fit', '');
            svg.setAttribute('height', '100%');
            svg.setAttribute('width', '100%');
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

            if (options && options.viewBox) {
              svg.setAttribute('viewBox', options.viewBox);
            }

            return svg;
          }
          /**
           * Returns an Observable which produces the string contents of the given icon. Results may be
           * cached, so future calls with the same URL may not cause another HTTP request.
           */

        }, {
          key: "_fetchIcon",
          value: function _fetchIcon(iconConfig) {
            var _this4 = this;

            var _a;

            var safeUrl = iconConfig.url,
                options = iconConfig.options;
            var withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;

            if (!this._httpClient) {
              throw _getMatIconNoHttpProviderError();
            } // TODO: add an ngDevMode check


            if (safeUrl == null) {
              throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
            }

            var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl); // TODO: add an ngDevMode check


            if (!url) {
              throw _getMatIconFailedToSanitizeUrlError(safeUrl);
            } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
            // already a request in progress for that URL. It's necessary to call share() on the
            // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.


            var inProgressFetch = this._inProgressUrlFetches.get(url);

            if (inProgressFetch) {
              return inProgressFetch;
            }

            var req = this._httpClient.get(url, {
              responseType: 'text',
              withCredentials: withCredentials
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(function () {
              return _this4._inProgressUrlFetches["delete"](url);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());

            this._inProgressUrlFetches.set(url, req);

            return req;
          }
          /**
           * Registers an icon config by name in the specified namespace.
           * @param namespace Namespace in which to register the icon config.
           * @param iconName Name under which to register the config.
           * @param config Config to be registered.
           */

        }, {
          key: "_addSvgIconConfig",
          value: function _addSvgIconConfig(namespace, iconName, config) {
            this._svgIconConfigs.set(iconKey(namespace, iconName), config);

            return this;
          }
          /**
           * Registers an icon set config in the specified namespace.
           * @param namespace Namespace in which to register the icon config.
           * @param config Config to be registered.
           */

        }, {
          key: "_addSvgIconSetConfig",
          value: function _addSvgIconSetConfig(namespace, config) {
            var configNamespace = this._iconSetConfigs.get(namespace);

            if (configNamespace) {
              configNamespace.push(config);
            } else {
              this._iconSetConfigs.set(namespace, [config]);
            }

            return this;
          }
          /** Parses a config's text into an SVG element. */

        }, {
          key: "_svgElementFromConfig",
          value: function _svgElementFromConfig(config) {
            if (!config.svgElement) {
              var svg = this._svgElementFromString(config.svgText);

              this._setSvgAttributes(svg, config.options);

              config.svgElement = svg;
            }

            return config.svgElement;
          }
          /** Tries to create an icon config through the registered resolver functions. */

        }, {
          key: "_getIconConfigFromResolvers",
          value: function _getIconConfigFromResolvers(namespace, name) {
            for (var i = 0; i < this._resolvers.length; i++) {
              var result = this._resolvers[i](name, namespace);

              if (result) {
                return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
              }
            }

            return undefined;
          }
        }]);

        return _MatIconRegistry;
      }();

      _MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
        return new (t || _MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler));
      };

      _MatIconRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MatIconRegistry_Factory() {
          return new _MatIconRegistry(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler));
        },
        token: _MatIconRegistry,
        providedIn: "root"
      });

      _MatIconRegistry.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatIconRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
          }];
        }, null);
      })();
      /** @docs-private */


      function _ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
        return parentRegistry || new _MatIconRegistry(httpClient, sanitizer, document, errorHandler);
      }
      /** @docs-private */


      var _ICON_REGISTRY_PROVIDER = {
        // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
        provide: _MatIconRegistry,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), _MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler, [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]],
        useFactory: _ICON_REGISTRY_PROVIDER_FACTORY
      };
      /** Clones an SVGElement while preserving type information. */

      function cloneSvg(svg) {
        return svg.cloneNode(true);
      }
      /** Returns the cache key to use for an icon namespace and name. */


      function iconKey(namespace, name) {
        return namespace + ':' + name;
      }

      function isSafeUrlWithOptions(value) {
        return !!(value.url && value.options);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatIcon.

      /** @docs-private */


      var _MatIconBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.mixinColor)( /*#__PURE__*/function () {
        function _class(_elementRef) {
          _classCallCheck(this, _class);

          this._elementRef = _elementRef;
        }

        return _class;
      }());
      /**
       * Injection token used to provide the current location to `MatIcon`.
       * Used to handle server-side rendering and to stub out during unit tests.
       * @docs-private
       */


      var _MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-icon-location', {
        providedIn: 'root',
        factory: _MAT_ICON_LOCATION_FACTORY
      });
      /** @docs-private */


      function _MAT_ICON_LOCATION_FACTORY() {
        var _document = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT);

        var _location = _document ? _document.location : null;

        return {
          // Note that this needs to be a function, rather than a property, because Angular
          // will only resolve it once, but we want the current path on each call.
          getPathname: function getPathname() {
            return _location ? _location.pathname + _location.search : '';
          }
        };
      }
      /** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */


      var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

      var _ɵ = function _ɵ(attr) {
        return "[".concat(attr, "]");
      };
      /** Selector that can be used to find all elements that are using a `FuncIRI`. */


      var funcIriAttributeSelector = funcIriAttributes.map(_ɵ).join(', ');
      /** Regex that can be used to extract the id out of a FuncIRI. */

      var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
      /**
       * Component to display an icon. It can be used in the following ways:
       *
       * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
       *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
       *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
       *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
       *   Examples:
       *     `<mat-icon svgIcon="left-arrow"></mat-icon>
       *     <mat-icon svgIcon="animals:cat"></mat-icon>`
       *
       * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
       *   component. By default the Material icons font is used as described at
       *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
       *   alternate font by setting the fontSet input to either the CSS class to apply to use the
       *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
       *   Examples:
       *     `<mat-icon>home</mat-icon>
       *     <mat-icon fontSet="myfont">sun</mat-icon>`
       *
       * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
       *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
       *   CSS class which causes the glyph to be displayed via a :before selector, as in
       *   https://fortawesome.github.io/Font-Awesome/examples/
       *   Example:
       *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
       */

      var _MatIcon = /*#__PURE__*/function (_MatIconBase2) {
        _inherits(_MatIcon, _MatIconBase2);

        var _super = _createSuper(_MatIcon);

        function _MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
          var _this5;

          _classCallCheck(this, _MatIcon);

          _this5 = _super.call(this, elementRef);
          _this5._iconRegistry = _iconRegistry;
          _this5._location = _location;
          _this5._errorHandler = _errorHandler;
          _this5._inline = false;
          /** Subscription to the current in-progress SVG icon request. */

          _this5._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
          // the right thing to do for the majority of icon use-cases.

          if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
          }

          return _this5;
        }
        /**
         * Whether the icon should be inlined, automatically sizing the icon to match the font size of
         * the element the icon is contained in.
         */


        _createClass(_MatIcon, [{
          key: "inline",
          get: function get() {
            return this._inline;
          },
          set: function set(inline) {
            this._inline = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(inline);
          }
          /** Name of the icon in the SVG icon set. */

        }, {
          key: "svgIcon",
          get: function get() {
            return this._svgIcon;
          },
          set: function set(value) {
            if (value !== this._svgIcon) {
              if (value) {
                this._updateSvgIcon(value);
              } else if (this._svgIcon) {
                this._clearSvgElement();
              }

              this._svgIcon = value;
            }
          }
          /** Font set that the icon is a part of. */

        }, {
          key: "fontSet",
          get: function get() {
            return this._fontSet;
          },
          set: function set(value) {
            var newValue = this._cleanupFontValue(value);

            if (newValue !== this._fontSet) {
              this._fontSet = newValue;

              this._updateFontIconClasses();
            }
          }
          /** Name of an icon within a font set. */

        }, {
          key: "fontIcon",
          get: function get() {
            return this._fontIcon;
          },
          set: function set(value) {
            var newValue = this._cleanupFontValue(value);

            if (newValue !== this._fontIcon) {
              this._fontIcon = newValue;

              this._updateFontIconClasses();
            }
          }
          /**
           * Splits an svgIcon binding value into its icon set and icon name components.
           * Returns a 2-element array of [(icon set), (icon name)].
           * The separator for the two fields is ':'. If there is no separator, an empty
           * string is returned for the icon set and the entire value is returned for
           * the icon name. If the argument is falsy, returns an array of two empty strings.
           * Throws an error if the name contains two or more ':' separators.
           * Examples:
           *   `'social:cake' -> ['social', 'cake']
           *   'penguin' -> ['', 'penguin']
           *   null -> ['', '']
           *   'a:b:c' -> (throws Error)`
           */

        }, {
          key: "_splitIconName",
          value: function _splitIconName(iconName) {
            if (!iconName) {
              return ['', ''];
            }

            var parts = iconName.split(':');

            switch (parts.length) {
              case 1:
                return ['', parts[0]];
              // Use default namespace.

              case 2:
                return parts;

              default:
                throw Error("Invalid icon name: \"".concat(iconName, "\""));
              // TODO: add an ngDevMode check
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // Update font classes because ngOnChanges won't be called if none of the inputs are present,
            // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
            this._updateFontIconClasses();
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var cachedElements = this._elementsWithExternalReferences;

            if (cachedElements && cachedElements.size) {
              var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
              // the browser doesn't have an API that will let us react on link clicks and
              // we can't depend on the Angular router. The references need to be updated,
              // because while most browsers don't care whether the URL is correct after
              // the first render, Safari will break if the user navigates to a different
              // page and the SVG isn't re-rendered.


              if (newPath !== this._previousPath) {
                this._previousPath = newPath;

                this._prependPathToReferences(newPath);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._currentIconFetch.unsubscribe();

            if (this._elementsWithExternalReferences) {
              this._elementsWithExternalReferences.clear();
            }
          }
        }, {
          key: "_usingFontIcon",
          value: function _usingFontIcon() {
            return !this.svgIcon;
          }
        }, {
          key: "_setSvgElement",
          value: function _setSvgElement(svg) {
            this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
            // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
            // Do this before inserting the element into the DOM, in order to avoid a style recalculation.


            var styleTags = svg.querySelectorAll('style');

            for (var i = 0; i < styleTags.length; i++) {
              styleTags[i].textContent += ' ';
            } // Note: we do this fix here, rather than the icon registry, because the
            // references have to point to the URL at the time that the icon was created.


            var path = this._location.getPathname();

            this._previousPath = path;

            this._cacheChildrenWithExternalReferences(svg);

            this._prependPathToReferences(path);

            this._elementRef.nativeElement.appendChild(svg);
          }
        }, {
          key: "_clearSvgElement",
          value: function _clearSvgElement() {
            var layoutElement = this._elementRef.nativeElement;
            var childCount = layoutElement.childNodes.length;

            if (this._elementsWithExternalReferences) {
              this._elementsWithExternalReferences.clear();
            } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
            // we can't use innerHTML, because IE will throw if the element has a data binding.


            while (childCount--) {
              var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
              // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

              if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
              }
            }
          }
        }, {
          key: "_updateFontIconClasses",
          value: function _updateFontIconClasses() {
            if (!this._usingFontIcon()) {
              return;
            }

            var elem = this._elementRef.nativeElement;
            var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

            if (fontSetClass != this._previousFontSetClass) {
              if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
              }

              if (fontSetClass) {
                elem.classList.add(fontSetClass);
              }

              this._previousFontSetClass = fontSetClass;
            }

            if (this.fontIcon != this._previousFontIconClass) {
              if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
              }

              if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
              }

              this._previousFontIconClass = this.fontIcon;
            }
          }
          /**
           * Cleans up a value to be used as a fontIcon or fontSet.
           * Since the value ends up being assigned as a CSS class, we
           * have to trim the value and omit space-separated values.
           */

        }, {
          key: "_cleanupFontValue",
          value: function _cleanupFontValue(value) {
            return typeof value === 'string' ? value.trim().split(' ')[0] : value;
          }
          /**
           * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
           * reference. This is required because WebKit browsers require references to be prefixed with
           * the current path, if the page has a `base` tag.
           */

        }, {
          key: "_prependPathToReferences",
          value: function _prependPathToReferences(path) {
            var elements = this._elementsWithExternalReferences;

            if (elements) {
              elements.forEach(function (attrs, element) {
                attrs.forEach(function (attr) {
                  element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
                });
              });
            }
          }
          /**
           * Caches the children of an SVG element that have `url()`
           * references that we need to prefix with the current path.
           */

        }, {
          key: "_cacheChildrenWithExternalReferences",
          value: function _cacheChildrenWithExternalReferences(element) {
            var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
            var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

            var _loop = function _loop(i) {
              funcIriAttributes.forEach(function (attr) {
                var elementWithReference = elementsWithFuncIri[i];
                var value = elementWithReference.getAttribute(attr);
                var match = value ? value.match(funcIriPattern) : null;

                if (match) {
                  var attributes = elements.get(elementWithReference);

                  if (!attributes) {
                    attributes = [];
                    elements.set(elementWithReference, attributes);
                  }

                  attributes.push({
                    name: attr,
                    value: match[1]
                  });
                }
              });
            };

            for (var i = 0; i < elementsWithFuncIri.length; i++) {
              _loop(i);
            }
          }
          /** Sets a new SVG icon with a particular name. */

        }, {
          key: "_updateSvgIcon",
          value: function _updateSvgIcon(rawName) {
            var _this6 = this;

            this._svgNamespace = null;
            this._svgName = null;

            this._currentIconFetch.unsubscribe();

            if (rawName) {
              var _this$_splitIconName = this._splitIconName(rawName),
                  _this$_splitIconName2 = _slicedToArray(_this$_splitIconName, 2),
                  namespace = _this$_splitIconName2[0],
                  iconName = _this$_splitIconName2[1];

              if (namespace) {
                this._svgNamespace = namespace;
              }

              if (iconName) {
                this._svgName = iconName;
              }

              this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(function (svg) {
                return _this6._setSvgElement(svg);
              }, function (err) {
                var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message);

                _this6._errorHandler.handleError(new Error(errorMessage));
              });
            }
          }
        }]);

        return _MatIcon;
      }(_MatIconBase);

      _MatIcon.ɵfac = function MatIcon_Factory(t) {
        return new (t || _MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler));
      };

      _MatIcon.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatIcon,
        selectors: [["mat-icon"]],
        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
        hostVars: 7,
        hostBindings: function MatIcon_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
          }
        },
        inputs: {
          color: "color",
          inline: "inline",
          svgIcon: "svgIcon",
          fontSet: "fontSet",
          fontIcon: "fontIcon"
        },
        exportAs: ["matIcon"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatIcon_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      _MatIcon.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _MatIconRegistry
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['aria-hidden']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_ICON_LOCATION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
        }];
      };

      _MatIcon.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        svgIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        fontSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        fontIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            template: '<ng-content></ng-content>',
            selector: 'mat-icon',
            exportAs: 'matIcon',
            inputs: ['color'],
            host: {
              'role': 'img',
              'class': 'mat-icon notranslate',
              '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
              '[attr.data-mat-icon-name]': '_svgName || fontIcon',
              '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
              '[class.mat-icon-inline]': 'inline',
              '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _MatIconRegistry
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['aria-hidden']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_ICON_LOCATION]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          svgIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          fontSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          fontIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatIconModule = function _MatIconModule() {
        _classCallCheck(this, _MatIconModule);
      };

      _MatIconModule.ɵfac = function MatIconModule_Factory(t) {
        return new (t || _MatIconModule)();
      };

      _MatIconModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatIconModule
      });
      _MatIconModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatIconModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
            exports: [_MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
            declarations: [_MatIcon]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatIconModule, {
          declarations: function declarations() {
            return [_MatIcon];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule];
          },
          exports: function exports() {
            return [_MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    29734: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailCreateComponent": function EmailCreateComponent() {
          return (
            /* binding */
            _EmailCreateComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-create.component.html */
      51718);
      /* harmony import */


      var _email_create_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-create.component.css */
      27487);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      50384);
      /* harmony import */


      var _email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../email.service */
      6062);

      var _EmailCreateComponent = /*#__PURE__*/function () {
        function EmailCreateComponent(authService, emailService) {
          _classCallCheck(this, EmailCreateComponent);

          this.authService = authService;
          this.emailService = emailService;
          this.showModal = false;
          this.email = {
            id: '',
            to: '',
            subject: '',
            html: '',
            text: '',
            from: "".concat(authService.username, "@angular-email.com")
          };
        }

        _createClass(EmailCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit(email) {
            var _this7 = this;

            //send the email off via the email service
            this.emailService.sendEmail(email).subscribe(function () {
              _this7.showModal = false;
            });
          }
        }]);

        return EmailCreateComponent;
      }();

      _EmailCreateComponent.ctorParameters = function () {
        return [{
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _email_service__WEBPACK_IMPORTED_MODULE_3__.EmailService
        }];
      };

      _EmailCreateComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-email-create',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_create_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_email_create_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _EmailCreateComponent);
      /***/
    },

    /***/
    92369: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailFormComponent": function EmailFormComponent() {
          return (
            /* binding */
            _EmailFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-form.component.html */
      48089);
      /* harmony import */


      var _email_form_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-form.component.css */
      8441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _EmailFormComponent = /*#__PURE__*/function () {
        function EmailFormComponent() {
          _classCallCheck(this, EmailFormComponent);

          this.emailSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(EmailFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this$email = this.email,
                subject = _this$email.subject,
                from = _this$email.from,
                to = _this$email.to,
                text = _this$email.text;
            this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(to, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
              from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
                value: from,
                disabled: true
              }),
              subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(subject, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
              text: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(text, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.emailForm.invalid) {
              return;
            }

            this.emailSubmit.emit(this.emailForm.value);
          }
        }, {
          key: "onCancelAction",
          value: function onCancelAction() {
            var _a;

            (_a = this.emailForm) === null || _a === void 0 ? void 0 : _a.reset();
            this.onCancel.emit(true);
          }
        }]);

        return EmailFormComponent;
      }();

      _EmailFormComponent.ctorParameters = function () {
        return [];
      };

      _EmailFormComponent.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        emailSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        onCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _EmailFormComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-email-form',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_email_form_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _EmailFormComponent);
      /***/
    },

    /***/
    10619: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailIndexComponent": function EmailIndexComponent() {
          return (
            /* binding */
            _EmailIndexComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_index_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-index.component.html */
      21586);
      /* harmony import */


      var _email_index_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-index.component.css */
      26756);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../email.service */
      6062);

      var _EmailIndexComponent = /*#__PURE__*/function () {
        function EmailIndexComponent(emailService) {
          _classCallCheck(this, EmailIndexComponent);

          this.emailService = emailService;
          this.emails = [];
        }

        _createClass(EmailIndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.emailService.getEmails().subscribe(function (emails) {
              _this8.emails = emails;
            });
          }
        }]);

        return EmailIndexComponent;
      }();

      _EmailIndexComponent.ctorParameters = function () {
        return [{
          type: _email_service__WEBPACK_IMPORTED_MODULE_2__.EmailService
        }];
      };

      _EmailIndexComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-email-index',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_index_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_email_index_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _EmailIndexComponent);
      /***/
    },

    /***/
    45621: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailReplayComponent": function EmailReplayComponent() {
          return (
            /* binding */
            _EmailReplayComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_replay_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-replay.component.html */
      38664);
      /* harmony import */


      var _email_replay_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-replay.component.css */
      99330);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../email.service */
      6062);

      var _EmailReplayComponent = /*#__PURE__*/function () {
        function EmailReplayComponent(emailService) {
          _classCallCheck(this, EmailReplayComponent);

          this.emailService = emailService;
          this.showModal = false;
        }

        _createClass(EmailReplayComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.email = Object.assign(Object.assign({}, this.email), {
              from: this.email.to,
              to: this.email.from,
              subject: "RE: ".concat(this.email.subject),
              text: "\n\n\n-------- ".concat(this.email.from, " wrote:\n> ").concat(this.email.text.replace(/\n/gi, '\n> '))
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(email) {
            var _this9 = this;

            this.emailService.sendEmail(email).subscribe(function () {
              _this9.showModal = false;
            });
          }
        }]);

        return EmailReplayComponent;
      }();

      _EmailReplayComponent.ctorParameters = function () {
        return [{
          type: _email_service__WEBPACK_IMPORTED_MODULE_2__.EmailService
        }];
      };

      _EmailReplayComponent.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _EmailReplayComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-email-replay',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_replay_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_email_replay_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _EmailReplayComponent);
      /***/
    },

    /***/
    29967: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailResolverService": function EmailResolverService() {
          return (
            /* binding */
            _EmailResolverService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./email.service */
      6062);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      8117);

      var _EmailResolverService = /*#__PURE__*/function () {
        function EmailResolverService(emailService, router) {
          _classCallCheck(this, EmailResolverService);

          this.emailService = emailService;
          this.router = router;
        }

        _createClass(EmailResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this10 = this;

            var id = route.params.id;
            return this.emailService.getEmail(id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function () {
              _this10.router.navigateByUrl('/inbox/not-found');

              return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
            }));
          }
        }]);

        return EmailResolverService;
      }();

      _EmailResolverService.ctorParameters = function () {
        return [{
          type: _email_service__WEBPACK_IMPORTED_MODULE_0__.EmailService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _EmailResolverService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _EmailResolverService);
      /***/
    },

    /***/
    82548: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailShowComponent": function EmailShowComponent() {
          return (
            /* binding */
            _EmailShowComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_show_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-show.component.html */
      7360);
      /* harmony import */


      var _email_show_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-show.component.css */
      58922);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _EmailShowComponent = /*#__PURE__*/function () {
        function EmailShowComponent(route) {
          var _this11 = this;

          _classCallCheck(this, EmailShowComponent);

          this.route = route;
          this.email = this.route.snapshot.data.email;
          this.route.data.subscribe(function (_ref) {
            var email = _ref.email;
            _this11.email = email;
          });
        }

        _createClass(EmailShowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EmailShowComponent;
      }();

      _EmailShowComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }];
      };

      _EmailShowComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-email-show',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_show_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_email_show_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _EmailShowComponent);
      /***/
    },

    /***/
    6062: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailService": function EmailService() {
          return (
            /* binding */
            _EmailService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _EmailService = /*#__PURE__*/function () {
        function EmailService(http) {
          _classCallCheck(this, EmailService);

          this.http = http;
          this.rootUrl = 'https://api.angular-email.com';
        }

        _createClass(EmailService, [{
          key: "getEmails",
          value: function getEmails() {
            return this.http.get("".concat(this.rootUrl, "/emails"));
          }
        }, {
          key: "getEmail",
          value: function getEmail(id) {
            return this.http.get("".concat(this.rootUrl, "/emails/").concat(id));
          }
        }, {
          key: "sendEmail",
          value: function sendEmail(email) {
            return this.http.post("".concat(this.rootUrl, "/emails"), email);
          }
        }]);

        return EmailService;
      }();

      _EmailService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _EmailService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _EmailService);
      /***/
    },

    /***/
    70859: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */
      77506);
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component.css */
      98116);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      _HomeComponent.ctorParameters = function () {
        return [];
      };

      _HomeComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _HomeComponent);
      /***/
    },

    /***/
    52308: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InboxRoutingModule": function InboxRoutingModule() {
          return (
            /* binding */
            _InboxRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _email_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./email-resolver.service */
      29967);
      /* harmony import */


      var _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-show/email-show.component */
      82548);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      70859);
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      97271);
      /* harmony import */


      var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./placeholder/placeholder.component */
      37792);

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        children: [{
          path: 'not-found',
          component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent
        }, {
          path: ':id',
          component: _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_1__.EmailShowComponent,
          resolve: {
            email: _email_resolver_service__WEBPACK_IMPORTED_MODULE_0__.EmailResolverService
          }
        }, {
          path: '',
          component: _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_4__.PlaceholderComponent
        }]
      }];

      var _InboxRoutingModule = function InboxRoutingModule() {
        _classCallCheck(this, InboxRoutingModule);
      };

      _InboxRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      })], _InboxRoutingModule);
      /***/
    },

    /***/
    9562: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InboxModule": function InboxModule() {
          return (
            /* binding */
            _InboxModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inbox-routing.module */
      52308);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      70859);
      /* harmony import */


      var _email_create_email_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./email-create/email-create.component */
      29734);
      /* harmony import */


      var _email_replay_email_replay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./email-replay/email-replay.component */
      45621);
      /* harmony import */


      var _email_index_email_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./email-index/email-index.component */
      10619);
      /* harmony import */


      var _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./email-show/email-show.component */
      82548);
      /* harmony import */


      var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./placeholder/placeholder.component */
      37792);
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      97271);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/shared.module */
      44466);
      /* harmony import */


      var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./email-form/email-form.component */
      92369);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _InboxModule = function InboxModule() {
        _classCallCheck(this, InboxModule);
      };

      _InboxModule = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _email_create_email_create_component__WEBPACK_IMPORTED_MODULE_2__.EmailCreateComponent, _email_replay_email_replay_component__WEBPACK_IMPORTED_MODULE_3__.EmailReplayComponent, _email_index_email_index_component__WEBPACK_IMPORTED_MODULE_4__.EmailIndexComponent, _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_5__.EmailShowComponent, _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_6__.PlaceholderComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent, _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_9__.EmailFormComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__.InboxRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule]
      })], _InboxModule);
      /***/
    },

    /***/
    97271: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotFoundComponent": function NotFoundComponent() {
          return (
            /* binding */
            _NotFoundComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./not-found.component.html */
      25817);
      /* harmony import */


      var _not_found_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./not-found.component.css */
      43260);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      _NotFoundComponent.ctorParameters = function () {
        return [];
      };

      _NotFoundComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-not-found',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_not_found_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _NotFoundComponent);
      /***/
    },

    /***/
    37792: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlaceholderComponent": function PlaceholderComponent() {
          return (
            /* binding */
            _PlaceholderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_placeholder_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./placeholder.component.html */
      3513);
      /* harmony import */


      var _placeholder_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./placeholder.component.css */
      51710);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _PlaceholderComponent = /*#__PURE__*/function () {
        function PlaceholderComponent() {
          _classCallCheck(this, PlaceholderComponent);
        }

        _createClass(PlaceholderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PlaceholderComponent;
      }();

      _PlaceholderComponent.ctorParameters = function () {
        return [];
      };

      _PlaceholderComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-placeholder',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_placeholder_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_placeholder_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _PlaceholderComponent);
      /***/
    },

    /***/
    51718: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button mat-button color=\"primary\" class=\"compose-action\" (click)=\"showModal=true\">\n    <mat-icon>add_circle_outline</mat-icon>\n    Compose\n</button>\n\n<app-modal (dismiss)=\"showModal=false\" *ngIf=\"showModal\">\n    <h3 modalTitle>Compose</h3>\n    <app-email-form (emailSubmit)=\"onSubmit($event)\" (onCancel)=\"showModal=false\" [email]=\"email\"></app-email-form>\n</app-modal>";
      /***/
    },

    /***/
    48089: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"emailForm\" class=\"ui form\" (ngSubmit)=\"onSubmit()\">\n   <app-input label=\"To\" inputType=\"email\" [control]=\"emailForm.get('to')\"></app-input>\n   <app-input label=\"From\" inputType=\"email\" [control]=\"emailForm.get('from')\"></app-input>\n   <app-input label=\"Subject\" inputType=\"text\" [control]=\"emailForm.get('subject')\"></app-input>\n   <app-input controlType=\"textarea\" label=\"Content\" [control]=\"emailForm.get('text')\"></app-input>\n    <div class=\"displayed-buttons\">\n        <button mat-stroked-button color=\"accent\" (click)=\"onCancelAction()\">Cancel</button>\n        <button mat-raised-button color=\"accent\">Send</button>\n    </div>\n</form>";
      /***/
    },

    /***/
    21586: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ui celled list\">\n    <div class=\"item\" *ngFor=\"let email of emails\">\n        <a [routerLink]=\"email.id\" routerLinkActive=\"active\">\n            <div class=\"content\">\n                <div class=\"header trim\">\n                    {{email.subject}}\n                </div>\n                <p class=\"trim\">\n                    {{email.from}}\n                </p>\n            </div>\n        </a>\n    </div>\n</div>";
      /***/
    },

    /***/
    38664: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button mat-raised-button color=\"accent\" (click)=\"showModal=true\">\n    Reply\n</button>\n\n<app-modal (dismiss)=\"showModal=false\" *ngIf=\"showModal\">\n    <h3 modalTitle>Reply</h3>\n    <app-email-form (emailSubmit)=\"onSubmit($event)\"  (onCancel)=\"showModal=false\" [email]=\"email\"></app-email-form>\n</app-modal>";
      /***/
    },

    /***/
    7360: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"header\">\n    <div>\n        <h3>{{email.subject}}</h3>\n        <div>\n            From: <i>{{email.from}}</i>\n        </div>\n        <div>\n            To: <i>{{email.to}}</i>\n        </div>\n    </div>\n    <div><app-email-replay [email]=\"email\"></app-email-replay></div>\n</div>\n<div class=\"ui divider\">\n    <br>\n    <div [innerHTML]=\"email.html\">\n  \n    </div>\n</div>";
      /***/
    },

    /***/
    77506: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ui grid stackable\">\n    <div class=\"five wide column\">\n        <app-email-create></app-email-create>\n        <app-email-index></app-email-index>\n    </div>\n    <div class=\"eleven wide column\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n";
      /***/
    },

    /***/
    25817: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ui placeholder segment\">\n    <div class=\"ui icon header\">\n        <i class=\"search icon\"></i>\n        Email not found!\n    </div>\n</div>";
      /***/
    },

    /***/
    3513: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ui placeholder segment\">\n    <div class=\"ui icon header\">\n        <i class=\"envelope outline icon\"></i>\n        Select an email to get started\n    </div>\n</div>";
      /***/
    },

    /***/
    27487: function _(module) {
      module.exports = ".compose-action{\n    margin-bottom:1rem;\n    width: 100%;\n    line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoiZW1haWwtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcG9zZS1hY3Rpb257XG4gICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    8441: function _(module) {
      module.exports = ".displayed-buttons{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton:first-of-type{\n    margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImVtYWlsLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5ZWQtYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbjpmaXJzdC1vZi10eXBle1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn0iXX0= */";
      /***/
    },

    /***/
    26756: function _(module) {
      module.exports = ".item a{\n    color:black;\n    padding: 10px;\n}\n\na.active{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border-left: 5px solid #ff4081;\n}\n\n.content {\n    width:90%;\n}\n\n.trim {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZiIsImZpbGUiOiJlbWFpbC1pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0gYXtcbiAgICBjb2xvcjpibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5hLmFjdGl2ZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmNDA4MTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHdpZHRoOjkwJTtcbn1cblxuLnRyaW0ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */";
      /***/
    },

    /***/
    99330: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1yZXBsYXkuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    58922: function _(module) {
      module.exports = ".header{\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXNob3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTs7QUFFbkIiLCJmaWxlIjoiZW1haWwtc2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbn0iXX0= */";
      /***/
    },

    /***/
    98116: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    43260: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    51710: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFjZWhvbGRlci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_inbox_inbox_module_ts-es5.js.map