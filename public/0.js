(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/answer/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions_serializeFormByDomSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../functions/serializeFormByDomSelector.js */ "./resources/js/functions/serializeFormByDomSelector.js");
/* harmony import */ var _functions_createStuff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../functions/createStuff.js */ "./resources/js/functions/createStuff.js");
/* harmony import */ var _functions_delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../functions/delay */ "./resources/js/functions/delay.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../bus */ "./resources/js/bus/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "createAnswer",
  props: ['currentQuestion', 'newAnswerCoords'],
  data: function data() {
    return {
      status_id: 0,
      name: '',
      createIsDone: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['answerStatusesList'])),
  mounted: function mounted() {
    this.$store.dispatch('getAnswerStatuses');
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['getAnswerStatuses'])), {}, {
    /**
     * эмитит событие для закрытия модальных окон
     */
    closeModal: function closeModal() {
      this.$emit('close-modal');
    },

    /**
     * Создать ответ
     *
     * @returns {Promise<void>}
     */
    submitAnswer: function submitAnswer() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var objFormData, _yield$createAnswer, status, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                objFormData = Object(_functions_serializeFormByDomSelector_js__WEBPACK_IMPORTED_MODULE_2__["default"])('#create_answer_form');
                objFormData.coords = JSON.parse(JSON.stringify(_this.newAnswerCoords));
                objFormData.question_id = _this.currentQuestion;
                _context.next = 5;
                return Object(_functions_createStuff_js__WEBPACK_IMPORTED_MODULE_3__["createAnswer"])(objFormData);

              case 5:
                _yield$createAnswer = _context.sent;
                status = _yield$createAnswer.status;
                data = _yield$createAnswer.data;

                if (!(201 == status)) {
                  _context.next = 14;
                  break;
                }

                _this.createIsDone = true; // todo: исправить этот костыль

                _bus__WEBPACK_IMPORTED_MODULE_5__["bus"].$emit('add-answer', _this.currentQuestion);
                _context.next = 13;
                return Object(_functions_delay__WEBPACK_IMPORTED_MODULE_4__["default"])(2);

              case 13:
                _this.closeModal();

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/answer/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions_serializeFormByDomSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../functions/serializeFormByDomSelector.js */ "./resources/js/functions/serializeFormByDomSelector.js");
/* harmony import */ var _functions_getStuffById_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../functions/getStuffById.js */ "./resources/js/functions/getStuffById.js");
/* harmony import */ var _functions_updateStuff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../functions/updateStuff.js */ "./resources/js/functions/updateStuff.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "editAnswer",
  props: ['current', 'currentQuestion'],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['answerStatusesList', 'questionsInCurrentScript'])),
  data: function data() {
    return {
      status_id: 0,
      name: '',
      editIsDone: false
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('getAnswerStatuses');
    this.setAnswerData();
  },
  watch: {
    current: function current() {
      this.setAnswerData();
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['updateAnswer'])), {}, {
    closeModal: function closeModal() {
      this.$emit('close-modal');
    },
    submitAnswer: function submitAnswer() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var objFormData, _yield$updateAnswer, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                objFormData = Object(_functions_serializeFormByDomSelector_js__WEBPACK_IMPORTED_MODULE_2__["default"])('#edit_answer_form');
                _context.next = 3;
                return Object(_functions_updateStuff_js__WEBPACK_IMPORTED_MODULE_4__["updateAnswer"])({
                  id: _this.current,
                  data: objFormData
                });

              case 3:
                _yield$updateAnswer = _context.sent;
                status = _yield$updateAnswer.status;

                if (200 == status) {
                  _this.editIsDone = true;
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setAnswerData: function setAnswerData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$getAnswerById, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_functions_getStuffById_js__WEBPACK_IMPORTED_MODULE_3__["getAnswerById"])(_this2.current);

              case 2:
                _yield$getAnswerById = _context2.sent;
                data = _yield$getAnswerById.data;
                _this2.name = data.name;
                _this2.status_id = data.status_id;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/answer/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../bus/index.js */ "./resources/js/bus/index.js");
/* harmony import */ var _functions_getStuffById_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../functions/getStuffById.js */ "./resources/js/functions/getStuffById.js");
/* harmony import */ var _functions_updateStuff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../functions/updateStuff.js */ "./resources/js/functions/updateStuff.js");
/* harmony import */ var _functions_deleteStuff_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../functions/deleteStuff.js */ "./resources/js/functions/deleteStuff.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "answer",
  props: ['answerId'],
  data: function data() {
    return {
      currentAnswer: 0,
      answer: {},
      question: {},
      stylesCoords: '',
      pathCoords: '',
      square: {
        x: 25,
        y: 25
      },
      dragOffsetX: null,
      dragOffsetY: null,
      blockColor: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$getAnswerById, data, _yield$getAnswerStatu, _data, _yield$getQuestionByI, _data2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_functions_getStuffById_js__WEBPACK_IMPORTED_MODULE_3__["getAnswerById"])(_this.answerId);

            case 2:
              _yield$getAnswerById = _context.sent;
              data = _yield$getAnswerById.data;
              _this.answer = data;

              if (!_this.answer.status_id) {
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return Object(_functions_getStuffById_js__WEBPACK_IMPORTED_MODULE_3__["getAnswerStatusById"])(_this.answer.status_id);

            case 8:
              _yield$getAnswerStatu = _context.sent;
              _data = _yield$getAnswerStatu.data;
              _this.blockColor = _data.color;

            case 11:
              if (!_this.answer.next_question_id) {
                _context.next = 17;
                break;
              }

              _context.next = 14;
              return Object(_functions_getStuffById_js__WEBPACK_IMPORTED_MODULE_3__["getQuestionById"])(_this.answer.next_question_id);

            case 14:
              _yield$getQuestionByI = _context.sent;
              _data2 = _yield$getQuestionByI.data;
              _this.question = _data2;

            case 17:
              if (_this.question.coords) {
                _this.pathCoords = "M 0 0 L ".concat(_this.question.coords.x - _this.answer.coords.x, " ").concat(_this.question.coords.y - _this.answer.coords.y);
              }

              if (_this.answer.coords) {
                _this.stylesCoords = "translate(".concat(_this.answer.coords.x, ", ").concat(_this.answer.coords.y, ")");
              }

              _bus_index_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$on('question-move', _this.questionMoveHandler);
              _bus_index_js__WEBPACK_IMPORTED_MODULE_2__["bus"].$on('question_is_bind', _this.drawBindLine);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['deleteAnswer'])), {}, {
    /**
     * Событие эмитит в родительский компонет зажатую мышку для отрисовки пути
     * и привязывания к следующему вопросу
     */
    bindToNextQuestion: function bindToNextQuestion(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$emit('click-answer-bind-to-next-question', e, _this2.answerId);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * эмитит событие в родителя чтобы вызвать модальное окно
     * для редактирования ответа
     */
    editAnswer: function editAnswer() {
      this.$emit('click-answer-edit', this.answer.id);
    },

    /**
     * Когда случилась привязка
     * todo: код скопирован из mounted (знаешь что это значит)
     */
    drawBindLine: function drawBindLine() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$getAnswerById2, data, _yield$getQuestionByI2, _data3;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_functions_getStuffById_js__WEBPACK_IMPORTED_MODULE_3__["getAnswerById"])(_this3.answerId);

              case 2:
                _yield$getAnswerById2 = _context3.sent;
                data = _yield$getAnswerById2.data;
                _this3.answer = data;

                if (!_this3.answer.next_question_id) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 8;
                return Object(_functions_getStuffById_js__WEBPACK_IMPORTED_MODULE_3__["getQuestionById"])(_this3.answer.next_question_id);

              case 8:
                _yield$getQuestionByI2 = _context3.sent;
                _data3 = _yield$getQuestionByI2.data;
                _this3.question = _data3;

              case 11:
                if (_this3.question.coords) {
                  _this3.pathCoords = "M 0 0 L ".concat(_this3.question.coords.x - _this3.answer.coords.x, " ").concat(_this3.question.coords.y - _this3.answer.coords.y);
                }

                if (_this3.answer.coords) {
                  _this3.stylesCoords = "translate(".concat(_this3.answer.coords.x, ", ").concat(_this3.answer.coords.y, ")");
                }

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },

    /**
     * Удаление ответа
     */
    deleteA: function deleteA() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$deleteAnswer, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!confirm('Ответ будет удален. Продолжить?')) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 3;
                return Object(_functions_deleteStuff_js__WEBPACK_IMPORTED_MODULE_5__["deleteAnswer"])(_this4.answer.id);

              case 3:
                _yield$deleteAnswer = _context4.sent;
                status = _yield$deleteAnswer.status;

                if (200 == status) {
                  _this4.$emit('answer-deleted', _this4.answer.id);
                }

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },

    /**
     * перерисовывает пути в родительском компоненте (question) от вопроса к ответу
     * вызывается в методах drag and drop
     *
     *
     * @param offsetX
     * @param offsetY
     */
    move: function move(_ref) {
      var _this5 = this;

      var offsetX = _ref.offsetX,
          offsetY = _ref.offsetY;
      this.$parent.pathsCoords = this.$parent.pathsCoords.map(function (el) {
        if (_this5.answerId == el.id) {
          el.value = "M ".concat(_this5.$parent.question.coords.x, " ").concat(_this5.$parent.question.coords.y, " L ").concat(offsetX - _this5.square.x, " ").concat(offsetY - _this5.square.y);
        }

        return el;
      });

      if (this.question.coords) {
        this.pathCoords = "M 0 0 L ".concat(this.question.coords.x - offsetX + this.square.x, " ").concat(this.question.coords.y - offsetY + this.square.y);
      }

      this.stylesCoords = "translate(".concat(offsetX - this.square.x, ", ").concat(offsetY - this.square.x, ")");
    },

    /**
     * Событие завершения перетаскивания
     * Метод сохраняет значения координат ответа в базу,
     * обновляет данные this.answer,
     * и вызывает событие answer-change в родителе (question)
     * не передает данные какой ответ изменился
     * todo: здесь передать id, в question обновлять не все ответы а только измененные
     *
     * вызывается в событии drop
     */
    dragEnd: function dragEnd(_ref2) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var offsetX, offsetY, _yield$updateAnswer, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                offsetX = _ref2.offsetX, offsetY = _ref2.offsetY;
                _context5.prev = 1;
                _context5.next = 4;
                return Object(_functions_updateStuff_js__WEBPACK_IMPORTED_MODULE_4__["updateAnswer"])({
                  id: _this6.answer.id,
                  data: {
                    coords: {
                      x: offsetX - _this6.square.x,
                      y: offsetY - _this6.square.y
                    }
                  }
                });

              case 4:
                _yield$updateAnswer = _context5.sent;
                data = _yield$updateAnswer.data;
                _this6.answer = data;

                _this6.$emit('answer-change');

                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](1);
                console.error(_context5.t0);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 10]]);
      }))();
    },

    /**
     * drag на событии mousedown
     *
     * @param offsetX
     * @param offsetY
     */
    drag: function drag(_ref3) {
      var offsetX = _ref3.offsetX,
          offsetY = _ref3.offsetY;
      this.dragOffsetX = offsetX - this.square.x;
      this.dragOffsetY = offsetY - this.square.y;
      this.$refs.box.addEventListener('mousemove', this.move);
    },

    /**
     * drag на событии mouseup
     */
    drop: function drop(e) {
      this.dragOffsetX = this.dragOffsetY = null;
      this.dragEnd(e);
      this.$refs.box.removeEventListener('mousemove', this.move);
    },

    /**
     * Перерисовывает линию от ответа к привязанному к нему вопросу/
     * Вызывается по событию question-move из шины событий
     *
     * @param questionId
     * @param coords
     */
    questionMoveHandler: function questionMoveHandler(_ref4) {
      var questionId = _ref4.questionId,
          coords = _ref4.coords;

      if (this.answer.next_question_id == questionId) {
        this.pathCoords = "M 0 0 L ".concat(coords.x - this.answer.coords.x, " ").concat(coords.y - this.answer.coords.y);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/question/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_serializeFormByDomSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../functions/serializeFormByDomSelector.js */ "./resources/js/functions/serializeFormByDomSelector.js");
/* harmony import */ var _functions_delay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../functions/delay.js */ "./resources/js/functions/delay.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _toast_ui_vue_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @toast-ui/vue-editor */ "./node_modules/@toast-ui/vue-editor/dist/toastui-vue-editor.js");
/* harmony import */ var _toast_ui_vue_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_toast_ui_vue_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _settings_editorOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../settings/editorOptions */ "./resources/js/settings/editorOptions.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "createQuestion",
  data: function data() {
    return {
      text: '',
      name: '',
      is_first: false,
      createIsDone: false,
      editorOptions: _settings_editorOptions__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
  },
  props: ['newQuestionCoords'],
  components: {
    Editor: _toast_ui_vue_editor__WEBPACK_IMPORTED_MODULE_4__["Editor"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['currentScriptId'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(['createQuestion'])), {}, {
    /**
     * эмитит событие для закрытия модальных окон
     */
    closeModal: function closeModal() {
      this.$emit('close-modal');
    },

    /**
     * Получить html из редактора
     *
     * @returns {*}
     */
    getHtml: function getHtml() {
      return this.$refs.toastuiEditor.invoke('getHtml');
    },

    /**
     * Создать вопрос
     *
     * @returns {Promise<void>}
     */
    submitQuestion: function submitQuestion() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var objFormData, _yield$_this$createQu, status, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                objFormData = Object(_functions_serializeFormByDomSelector_js__WEBPACK_IMPORTED_MODULE_1__["default"])('#create_question_form');
                objFormData.text = _this.getHtml();
                objFormData.coords = JSON.parse(JSON.stringify(_this.newQuestionCoords));
                objFormData.script_id = _this.currentScriptId;
                _context.next = 6;
                return _this.createQuestion(objFormData);

              case 6:
                _yield$_this$createQu = _context.sent;
                status = _yield$_this$createQu.status;
                data = _yield$_this$createQu.data;

                if (data.first_question_name) {
                  alert('нельзя создать еще один первый вопрос. Название существующего первого вопроса: ' + data.first_question_name);
                }

                if (!(201 == status)) {
                  _context.next = 16;
                  break;
                }

                _this.$emit('created');

                _this.createIsDone = true;
                _context.next = 15;
                return Object(_functions_delay_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2);

              case 15:
                _this.closeModal();

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/question/edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions_serializeFormByDomSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../functions/serializeFormByDomSelector.js */ "./resources/js/functions/serializeFormByDomSelector.js");
/* harmony import */ var _functions_getStuffById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../functions/getStuffById */ "./resources/js/functions/getStuffById.js");
/* harmony import */ var _toast_ui_vue_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @toast-ui/vue-editor */ "./node_modules/@toast-ui/vue-editor/dist/toastui-vue-editor.js");
/* harmony import */ var _toast_ui_vue_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_toast_ui_vue_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _settings_editorOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../settings/editorOptions */ "./resources/js/settings/editorOptions.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "editQuestion",
  props: ['current'],
  data: function data() {
    return {
      name: '',
      text: '',
      is_first: false,
      editIsDone: false,
      editorOptions: _settings_editorOptions__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
  },
  components: {
    Editor: _toast_ui_vue_editor__WEBPACK_IMPORTED_MODULE_4__["Editor"]
  },
  mounted: function mounted() {
    this.setQuestionData();
  },
  watch: {
    current: function current() {
      this.setQuestionData();
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['questionsInCurrentScript', 'currentScriptId'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['updateQuestion'])), {}, {
    /**
     *
     */
    addToMarkdown: function addToMarkdown() {
      this.$refs.toastuiEditor.invoke('setHtml', '{{imya}}');
    },

    /**
     * эмитит событие для закрытия модальных окон
     */
    closeModal: function closeModal() {
      this.$emit('close-modal');
    },

    /**
     * Получить html из редактора
     *
     * @returns {*}
     */
    getHtml: function getHtml() {
      return this.$refs.toastuiEditor.invoke('getHtml');
    },

    /**
     * Устанавливает начальные данные для редактирования
     *
     * @returns {Promise<void>}
     */
    setQuestionData: function setQuestionData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$getQuestionByI, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_functions_getStuffById__WEBPACK_IMPORTED_MODULE_3__["getQuestionById"])(_this.current);

              case 2:
                _yield$getQuestionByI = _context.sent;
                data = _yield$getQuestionByI.data;
                _this.name = data.name;
                _this.text = data.text;

                if (1 == data.is_first) {
                  _this.is_first = true;
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * Обновить вопрос
     *
     * @returns {Promise<void>}
     */
    submitQuestion: function submitQuestion() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var objFormData, _yield$_this2$updateQ, status, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                objFormData = Object(_functions_serializeFormByDomSelector_js__WEBPACK_IMPORTED_MODULE_2__["default"])('#edit_question_form');
                objFormData.text = _this2.getHtml();
                objFormData.script_id = _this2.currentScriptId;
                _context2.next = 6;
                return _this2.updateQuestion({
                  id: _this2.current,
                  data: objFormData
                });

              case 6:
                _yield$_this2$updateQ = _context2.sent;
                status = _yield$_this2$updateQ.status;
                data = _yield$_this2$updateQ.data;

                if (data.first_question_name) {
                  alert('Нельзя создать еще один первый вопрос. Название существующего первого вопроса: ' + data.first_question_name);
                } else if (200 == status) {
                  _this2.editIsDone = true;
                }

                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 12]]);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/question/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_EditScript_answer_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/EditScript/answer/index.vue */ "./resources/js/components/EditScript/answer/index.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions_getStuffById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../functions/getStuffById */ "./resources/js/functions/getStuffById.js");
/* harmony import */ var _bus_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../bus/index.js */ "./resources/js/bus/index.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "question",
  props: ['questionId', 'questionsIsLoaded'],
  data: function data() {
    return {
      stylesCoords: '',
      pathsCoords: [],
      newPathCoord: '',
      answers: [],
      question: {},
      editAnswer: false,
      currentAnswer: 0,
      square: {
        x: 75,
        y: 25
      },
      dragOffsetX: null,
      dragOffsetY: null,
      x: null,
      y: null
    };
  },
  components: {
    Answer: _components_EditScript_answer_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {},
  watch: {
    /**
     * получаю вопрос из стора когда они туда загружены
     * получаю ответы вопроса - присваиваю this.answers
     * создаю линии ко всем ответам - в this.pathsCoords
     */
    questionsIsLoaded: function questionsIsLoaded(val) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!val) {
                  _context.next = 8;
                  break;
                }

                _this.questionsInCurrentScript.forEach(function (el) {
                  if (_this.questionId == el.id) {
                    _this.question = el;
                  }
                });

                if (_this.question.coords) {
                  _this.stylesCoords = "translate(".concat(_this.question.coords.x, ", ").concat(_this.question.coords.y, ")");
                }

                _context.next = 5;
                return Object(_functions_getStuffById__WEBPACK_IMPORTED_MODULE_3__["getAnswersOfQuestionById"])(_this.questionId);

              case 5:
                _this.answers = _context.sent;

                _this.setPathsCoords();

                _bus_index_js__WEBPACK_IMPORTED_MODULE_4__["bus"].$on('add-answer', _this.addAnswer);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['currentScriptId', 'questionsInCurrentScript'])), {}, {
    cursor: function cursor() {
      return "cursor: ".concat(this.dragOffsetX ? 'grabbing' : 'grab', ", ");
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(['updateQuestion', 'deleteQuestion'])), {}, {
    /**
     * эмитится из компонента answer
     * и передается дальше в компонент EditScript
     */
    clickBindToNextQuestion: function clickBindToNextQuestion(e, answerId) {
      this.$emit('click-answer-bind-to-next-question', e, answerId);
    },

    /**
     * Событие передает родительскому компоненту
     */
    addAnswerMousedown: function addAnswerMousedown(e) {
      this.$emit('click-answer-add-mousedown', e, this.question.id);
    },

    /**
     * Говорит родительскому компоненту чтобы он вызвал редактирование ответа
     * срабатывает по событию click-answer-edit вызываемое из компонента answer
     */
    clickEditAnswer: function clickEditAnswer(id) {
      this.$emit('click-answer-edit', id);
    },

    /**
     * Говорит родительскому компоненту чтобы он вызвал редактирование вопроса
     *
     */
    editQuestion: function editQuestion() {
      this.$emit('click-question-edit');
    },

    /**
     * Событие вызывается из компонента answer
     * чтобы обновить данные о ответах здесь:
     * перерисовать линии
     * todo: чтобы конкретный вопрос обовлялся а не все
     *
     * @returns {Promise<void>}
     */
    changeAnswers: function changeAnswers() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_functions_getStuffById__WEBPACK_IMPORTED_MODULE_3__["getAnswersOfQuestionById"])(_this2.questionId);

              case 2:
                _this2.answers = _context2.sent;

                _this2.changePathCoords({
                  offsetX: _this2.question.coords.x,
                  offsetY: _this2.question.coords.y
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * событие при добавлении ответа
     * todo: обновлять более конкретно
     */
    addAnswer: function addAnswer(questionId) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(questionId == _this3.questionId)) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 3;
                return Object(_functions_getStuffById__WEBPACK_IMPORTED_MODULE_3__["getAnswersOfQuestionById"])(_this3.questionId);

              case 3:
                _this3.answers = _context3.sent;
                _this3.pathsCoords = [];

                _this3.setPathsCoords();

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },

    /**
     * Изменить координаты путей до ответов
     */
    changePathCoords: function changePathCoords(_ref) {
      var _this4 = this;

      var offsetX = _ref.offsetX,
          offsetY = _ref.offsetY;

      var _iterator = _createForOfIteratorHelper(this.answers),
          _step;

      try {
        var _loop = function _loop() {
          var answer = _step.value;
          _this4.pathsCoords = _this4.pathsCoords.map(function (el) {
            if (el.id == answer.id) {
              el.value = "M ".concat(offsetX, " ").concat(offsetY, " L ").concat(answer.coords.x, " ").concat(answer.coords.y);
            }

            return el;
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },

    /**
     * Удалить координаты пути и ответ до удаленного ответа
     */
    deletePathCoordsAndAnswerByAnswerId: function deletePathCoordsAndAnswerByAnswerId(answerId) {
      this.pathsCoords = this.pathsCoords.filter(function (item) {
        return item.id != answerId;
      });
      this.answers = this.answers.filter(function (item) {
        return item.id != answerId;
      });
    },

    /**
     * Удаление вопроса
     */
    deleteQ: function deleteQ() {
      if (confirm('Все связанные сущности будут удалены. Продолжить?')) {
        this.deleteQuestion(this.question.id);
      }
    },

    /**
     * Установить линии от вопросов к ответам.
     */
    setPathsCoords: function setPathsCoords() {
      var _iterator2 = _createForOfIteratorHelper(this.answers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var answer = _step2.value;
          this.pathsCoords.push({
            id: answer.id,
            value: "M ".concat(this.question.coords.x, " ").concat(this.question.coords.y, " L ").concat(answer.coords.x, " ").concat(answer.coords.y)
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },

    /**
     * Событие завершения перетаскивания
     * Метод сохраняет значения координат вопроса в базу,
     * обновляет данные this.question,
     * и по шине событий передает событие question-move с данными:
     * questionId - id вопроса который передвинут
     * coords - новые координаты вопроса
     * что перерисовать линию от ответа к привязанному к нему вопросу
     * в компоненте answer
     *
     * вызывается в событии drop
     */
    dragEnd: function dragEnd(_ref2) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var offsetX, offsetY, coords, _yield$_this5$updateQ, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                offsetX = _ref2.offsetX, offsetY = _ref2.offsetY;
                _context4.prev = 1;
                coords = {
                  x: offsetX - _this5.square.x,
                  y: offsetY - _this5.square.y
                };
                _context4.next = 5;
                return _this5.updateQuestion({
                  id: _this5.question.id,
                  data: {
                    coords: coords
                  }
                });

              case 5:
                _yield$_this5$updateQ = _context4.sent;
                data = _yield$_this5$updateQ.data;
                _this5.question = data;
                _bus_index_js__WEBPACK_IMPORTED_MODULE_4__["bus"].$emit('question-move', {
                  questionId: _this5.question.id,
                  coords: coords
                });
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](1);
                console.error(_context4.t0);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 11]]);
      }))();
    },

    /**
     * перерисовывает пути ко всем ответам
     * вызывается в методах drag and drop
     *
     * @param offsetX
     * @param offsetY
     */
    move: function move(_ref3) {
      var offsetX = _ref3.offsetX,
          offsetY = _ref3.offsetY;
      this.changePathCoords({
        offsetX: offsetX,
        offsetY: offsetY
      });
      this.stylesCoords = "translate(".concat(offsetX - this.square.x, ", ").concat(offsetY - this.square.y, ")");
    },

    /**
     * drag на событии mousedown
     *
     * @param offsetX
     * @param offsetY
     */
    drag: function drag(_ref4) {
      var offsetX = _ref4.offsetX,
          offsetY = _ref4.offsetY;
      this.dragOffsetX = offsetX - this.square.x;
      this.dragOffsetY = offsetY - this.square.y;
      this.$refs.box.addEventListener('mousemove', this.move);
    },

    /**
     * drag на событии mouseup
     */
    drop: function drop(e) {
      this.dragOffsetX = this.dragOffsetY = null;
      this.dragEnd(e);
      this.$refs.box.removeEventListener('mousemove', this.move);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditScript.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditScript.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_EditScript_question_index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/EditScript/question/index.vue */ "./resources/js/components/EditScript/question/index.vue");
/* harmony import */ var _components_EditScript_question_create_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/EditScript/question/create.vue */ "./resources/js/components/EditScript/question/create.vue");
/* harmony import */ var _components_EditScript_question_edit_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/EditScript/question/edit.vue */ "./resources/js/components/EditScript/question/edit.vue");
/* harmony import */ var _components_EditScript_answer_create_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/EditScript/answer/create.vue */ "./resources/js/components/EditScript/answer/create.vue");
/* harmony import */ var _components_EditScript_answer_edit_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/EditScript/answer/edit.vue */ "./resources/js/components/EditScript/answer/edit.vue");
/* harmony import */ var _functions_updateStuff_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../functions/updateStuff.js */ "./resources/js/functions/updateStuff.js");
/* harmony import */ var tui_editor_dist_tui_editor_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tui-editor/dist/tui-editor.css */ "./node_modules/tui-editor/dist/tui-editor.css");
/* harmony import */ var tui_editor_dist_tui_editor_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tui_editor_dist_tui_editor_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tui_editor_dist_tui_editor_contents_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tui-editor/dist/tui-editor-contents.css */ "./node_modules/tui-editor/dist/tui-editor-contents.css");
/* harmony import */ var tui_editor_dist_tui_editor_contents_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tui_editor_dist_tui_editor_contents_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bus */ "./resources/js/bus/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






 // стили для текстового редактора




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EditScript",
  components: {
    Question: _components_EditScript_question_index_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditQuestion: _components_EditScript_question_edit_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    createAnswer: _components_EditScript_answer_create_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    editAnswer: _components_EditScript_answer_edit_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    createQuestion: _components_EditScript_question_create_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      currentEditQuestionId: 0,
      currentEditAnswerId: 0,
      currentQuestionBindId: 0,
      CreatingUpdatingState: {
        creatingAnswer: false,
        creatingQuestion: false,
        editingQuestion: false,
        editingAnswer: false
      },
      square: {
        x: 25,
        y: 25
      },
      newQuestionCoords: {},
      newAnswerCoords: {},
      dragOffsetX: null,
      dragOffsetY: null,
      pathCoords: '',
      stylesCoords: '',
      questionsIsLoaded: false,
      elHelper: Element
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.$store.dispatch('setCurrentScriptId', _this.$route.params.id);

              _context.next = 3;
              return _this.$store.dispatch('setQuestionsInCurrentScript');

            case 3:
              _this.questionsIsLoaded = _context.sent;
              _bus__WEBPACK_IMPORTED_MODULE_10__["bus"].$on('add-answer', function () {
                return _this.currentEditQuestionId = 0;
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['currentScriptId', 'questionsInCurrentScript'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['setCurrentScriptId', 'setQuestionsInCurrentScript'])), {}, {
    /**
     * Если создался новый вопрос, обновим данные в сторе
     */
    updateQuestions: function updateQuestions() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.questionsIsLoaded = false;
                _context2.next = 3;
                return _this2.$store.dispatch('setQuestionsInCurrentScript');

              case 3:
                _this2.questionsIsLoaded = _context2.sent;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * эмитится из компонента answer при перетаскивании линии
     * для привязки к вопросу
     */
    dragForBind: function dragForBind(_ref, answerId) {
      var offsetX = _ref.offsetX,
          offsetY = _ref.offsetY;
      this.currentEditAnswerId = answerId;
      this.dragOffsetX = offsetX - this.square.x;
      this.dragOffsetY = offsetY - this.square.y;
      this.$refs.dynamicLine.addEventListener('mousemove', this.moveForBind);
      this.$refs.dynamicLine.addEventListener('mouseup', this.dropForBind);
    },

    /**
     * вешается на событие mousemove на элемент $refs.dynamicLine
     * в методе dragForBind
     */
    moveForBind: function moveForBind(_ref2) {
      var offsetX = _ref2.offsetX,
          offsetY = _ref2.offsetY;
      this.pathCoords = "M ".concat(this.dragOffsetX - offsetX, " ").concat(this.dragOffsetY - offsetY, " L 0 0");
      this.stylesCoords = "translate(".concat(offsetX, ", ").concat(offsetY, ")"); // todo: высчитать размер шапки и заменить магическое число

      var test = document.elementFromPoint(offsetX, offsetY + 152);

      if (test.classList.contains('for_bind')) {
        this.currentEditQuestionId = test.id;
        this.elHelper = test;
        test.setAttribute("fill", "red");
      } else {
        this.currentEditQuestionId = 0;

        if (typeof this.elHelper.attributes !== 'undefined') {
          this.elHelper.setAttribute("fill", "transparent");
        }
      }
    },

    /**
     * конец драга
     */
    dropForBind: function dropForBind() {
      this.dragOffsetX = this.dragOffsetY = null;
      this.dragEndForBind();
      this.$refs.dynamicLine.removeEventListener('mousemove', this.moveForBind);
      this.elHelper.setAttribute("fill", "transparent");
      this.pathCoords = '';
      this.stylesCoords = '';
    },

    /**
     * вызывается в методе dropForBind (там где заканчивается перетаскивание)
     * и если мышь с концом линии попала на вопрос обновить вопрос (создать привязку)
     */
    dragEndForBind: function dragEndForBind() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$updateAnswer, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3.currentEditQuestionId) {
                  _context3.next = 12;
                  break;
                }

                if (!confirm('Привязать к этому элементу?')) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 4;
                return Object(_functions_updateStuff_js__WEBPACK_IMPORTED_MODULE_7__["updateAnswer"])({
                  id: _this3.currentEditAnswerId,
                  data: {
                    next_question_id: _this3.currentEditQuestionId
                  }
                });

              case 4:
                _yield$updateAnswer = _context3.sent;
                status = _yield$updateAnswer.status;

                if (200 == status) {
                  _bus__WEBPACK_IMPORTED_MODULE_10__["bus"].$emit('question_is_bind', _this3.currentEditQuestionId);
                  _this3.pathCoords = '';
                  _this3.stylesCoords = '';
                  _this3.currentEditQuestionId = 0;
                  _this3.currentEditAnswerId = 0;
                }

                _context3.next = 12;
                break;

              case 9:
                _this3.elHelper.setAttribute("fill", "transparent");

                _this3.pathCoords = '';
                _this3.stylesCoords = '';

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },

    /**
     * эмитится из компонента question
     */
    drag: function drag(_ref3, questionId) {
      var offsetX = _ref3.offsetX,
          offsetY = _ref3.offsetY;
      this.currentEditQuestionId = questionId;
      this.dragOffsetX = offsetX - this.square.x;
      this.dragOffsetY = offsetY - this.square.y;
      this.$refs.dynamicLine.addEventListener('mousemove', this.move);
      this.$refs.dynamicLine.addEventListener('mouseup', this.drop);
    },

    /**
     * вызывается в методе drag
     */
    move: function move(_ref4) {
      var offsetX = _ref4.offsetX,
          offsetY = _ref4.offsetY;
      this.pathCoords = "M ".concat(this.dragOffsetX - offsetX, " ").concat(this.dragOffsetY - offsetY, " L 0 0");
      this.stylesCoords = "translate(".concat(offsetX, ", ").concat(offsetY, ")");
    },

    /**
     * метод вызывается на событии mouseup
     * которое повешено на элемент this.$refs.dynamicLine
     * в методе drag
     */
    drop: function drop(_ref5) {
      var offsetX = _ref5.offsetX,
          offsetY = _ref5.offsetY;
      this.newAnswerCoords = {
        x: offsetX - this.square.x,
        y: offsetY - this.square.y
      };
      this.dragOffsetX = this.dragOffsetY = null;
      this.$refs.dynamicLine.removeEventListener('mousemove', this.move);
      this.$refs.dynamicLine.removeEventListener('mouseup', this.drop);
      this.dragEnd();
    },

    /**
     * Сохраняет координаты двойного клика в this.newQuestionCoords
     * и передает их в компонент создания вопроса
     * вызывает модальное окно создания вопроса
     *
     * @param e {MouseEvent}
     */
    createQuestion: function createQuestion(_ref6) {
      var offsetX = _ref6.offsetX,
          offsetY = _ref6.offsetY;
      this.newQuestionCoords = {
        x: offsetX - this.square.x,
        y: offsetY - this.square.y
      };
      this.updateCreatingUpdatingState('creatingQuestion');
    },

    /**
     * вызовет модалку для создания ответа
     * в событии drop
     */
    dragEnd: function dragEnd() {
      this.selectCreateAnswer();
    },

    /**
     * Вызывает модальное окно создания ответа
     */
    selectCreateAnswer: function selectCreateAnswer() {
      this.updateCreatingUpdatingState('creatingAnswer');
    },

    /**
     * Вызывает модальное окно создания вопроса
     *
     * @param id
     */
    selectCreateQuestion: function selectCreateQuestion(id) {
      this.currentEditQuestionId = id;
      this.updateCreatingUpdatingState('creatingAnswer');
    },

    /**
     * Вызывает модальное окно изменения вопроса
     *
     * @param id
     */
    selectEditQuestion: function selectEditQuestion(id) {
      this.currentEditQuestionId = id;
      this.updateCreatingUpdatingState('editingQuestion');
    },

    /**
     * Вызывает модальное окно изменения ответа
     *
     * @param id
     */
    selectEditAnswer: function selectEditAnswer(id) {
      this.currentEditAnswerId = id;
      this.updateCreatingUpdatingState('editingAnswer');
    },

    /**
     * Закрывает модальные окна
     */
    closeAllModal: function closeAllModal() {
      for (var state in this.CreatingUpdatingState) {
        this.CreatingUpdatingState[state] = false;
      }

      this.currentEditQuestionId = 0;
      this.pathCoords = '';
    },

    /**
     * Изменяет состояние CreatingUpdatingState имеющее 4 поля:
     *
     * creatingQuestion - сейчас видно модальное окно создания вопроса
     * creatingAnswer - сейчас видно модальное окно создания ответа
     *
     * editingQuestion - сейчас видно модальное окно изменения вопроса
     * editingAnswer - сейчас видно модальное окно изменения ответа
     *
     * @param activePopup
     */
    updateCreatingUpdatingState: function updateCreatingUpdatingState(activePopup) {
      for (var state in this.CreatingUpdatingState) {
        if (state == activePopup) {
          this.CreatingUpdatingState[state] = true;
        } else {
          this.CreatingUpdatingState[state] = false;
        }
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/index.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/answer/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".answer_drag {\n  display: inline-block;\n  cursor: grab;\n}\n.answer {\n  border: 1px solid black;\n  display: inline-block;\n  padding: 10px;\n}\n.answer.selected {\n  background-color: aqua;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/index.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/question/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit-question, .delete, .add-answer, .edit-answer {\n  cursor: pointer;\n}\n.question_with_answer {\n  display: inline-block;\n  cursor: grab;\n}\n.question {\n  border: 1px solid black;\n  display: inline-block;\n  padding: 10px;\n}\n.question.selected {\n  background-color: aqua;\n}\n.question_drag {\n  display: inline-block;\n}\n.handle {\n  fill: dodgerblue;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditScript.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditScript.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.edit-script {\n    position: fixed;\n    top: 150px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/index.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/answer/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/index.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/index.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/question/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/index.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditScript.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditScript.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditScript.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditScript.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/create.vue?vue&type=template&id=49342d3e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/answer/create.vue?vue&type=template&id=49342d3e& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("Создание ответа")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { "aria-hidden": "true" },
                        on: { click: _vm.closeModal }
                      },
                      [_vm._v("×")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm.createIsDone
                  ? _c("div", [
                      _vm._v(
                        "\n                            Ответ успешно создан\n                        "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.createIsDone
                  ? _c(
                      "form",
                      {
                        attrs: { id: "create_answer_form" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submitAnswer($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v(
                              "\n                                    Название ответа\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "name", name: "name" },
                            domProps: { value: _vm.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "status" } }, [
                            _vm._v(
                              "\n                                    Статус\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.status_id,
                                  expression: "status_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { id: "status", name: "status_id" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.status_id = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.answerStatusesList, function(status) {
                              return _c(
                                "option",
                                {
                                  key: status.id,
                                  domProps: { value: status.id }
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(status.text) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit", value: "Сохранить" }
                        })
                      ]
                    )
                  : _vm._e()
              ])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/edit.vue?vue&type=template&id=7652a5cc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/answer/edit.vue?vue&type=template&id=7652a5cc& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("Редактирование ответа")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { "aria-hidden": "true" },
                        on: { click: _vm.closeModal }
                      },
                      [_vm._v("×")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm.editIsDone
                  ? _c("div", [
                      _vm._v(
                        "\n                            Вопрос успешно отредактирован\n                        "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.editIsDone
                  ? _c(
                      "form",
                      {
                        attrs: { id: "edit_answer_form" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submitAnswer($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v(
                              "\n                                    Название ответа\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "name", name: "name" },
                            domProps: { value: _vm.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "status" } }, [
                            _vm._v(
                              "\n                                    Статус\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.status_id,
                                  expression: "status_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { id: "status", name: "status_id" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.status_id = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.answerStatusesList, function(status) {
                              return _c(
                                "option",
                                {
                                  key: status.id,
                                  domProps: { value: status.id }
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(status.text) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit", value: "Сохранить" }
                        })
                      ]
                    )
                  : _vm._e()
              ])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/index.vue?vue&type=template&id=d48c6500&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/answer/index.vue?vue&type=template&id=d48c6500& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      ref: "box",
      staticClass: "answer_drag",
      attrs: { transform: _vm.stylesCoords, id: _vm.answer.id }
    },
    [
      _c("defs", [
        _c(
          "marker",
          {
            attrs: {
              id: "arrow",
              markerWidth: "20",
              markerHeight: "20",
              refX: "10",
              refY: "3",
              orient: "auto",
              markerUnits: "strokeWidth"
            }
          },
          [_c("path", { attrs: { d: "M0,0 L0,6 L9,3 z", fill: "#4294ff" } })]
        )
      ]),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: _vm.pathCoords,
          fill: "transparent",
          stroke: "#4294ff",
          "stroke-width": "1",
          "marker-end": "url(#arrow)"
        }
      }),
      _vm._v(" "),
      _c("g", { on: { mousedown: _vm.drag, mouseup: _vm.drop } }, [
        _c("text", { attrs: { x: "20", y: "24", fill: "#000" } }, [
          _vm._v("\n            " + _vm._s(_vm.answer.name) + "\n        ")
        ]),
        _vm._v(" "),
        _c("rect", {
          staticClass: "answer",
          attrs: {
            width: "200",
            height: "40",
            fill: "transparent",
            stroke: _vm.blockColor,
            "stroke-width": "2"
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "g",
        {
          staticClass: "question add-answer",
          on: { mousedown: _vm.bindToNextQuestion }
        },
        [
          _c("circle", {
            attrs: {
              cy: "40",
              cx: "100",
              r: "10",
              stroke: "#cfcfcf",
              "stroke-width": "1",
              fill: "#fff"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticStyle: { fill: "#2f700f" },
            attrs: {
              d:
                "M108.66,48.66h2.57a.51.51,0,0,0,.51-.51v-.34a.51.51,0,0,0-.51-.52h-2.57V44.73a.51.51,0,0,0-.51-.52h-.34a.52.52,0,0,0-.52.52v2.56h-2.56a.52.52,0,0,0-.52.52v.34a.51.51,0,0,0,.52.51h2.56v2.57a.51.51,0,0,0,.52.51h.34a.51.51,0,0,0,.51-.51Z",
              y: "0",
              x: "280",
              transform: "translate(-40 -22) scale(1.3)",
              width: "80",
              height: "80"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "g",
        { staticClass: "answer edit-answer", on: { click: _vm.editAnswer } },
        [
          _c("circle", {
            attrs: {
              cy: "0",
              cx: "200",
              r: "10",
              stroke: "#f58d0f",
              "stroke-width": "2",
              fill: "white"
            }
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M206.68,11.07l-2-2,4.83-4.83,2,2Zm-2.19-1.65,1.83,1.83-2.74.92Zm7.63-3.8-.35.35-2-2,.35-.35a.89.89,0,0,1,1.26,0l.74.74A.89.89,0,0,1,212.12,5.62Z",
              width: "80",
              height: "80",
              x: "200",
              transform: "translate(-70 -10) scale(1.3)",
              fill: "#4294ff"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("g", { staticClass: "answer delete", on: { click: _vm.deleteA } }, [
        _c("circle", {
          attrs: {
            cy: "0",
            cx: "0",
            r: "10",
            stroke: "#cfcfcf",
            "stroke-width": "1",
            fill: "#fff"
          }
        }),
        _vm._v(" "),
        _c("path", {
          staticStyle: { fill: "#f00" },
          attrs: {
            d:
              "M9,8l1.81-1.82a.51.51,0,0,0,0-.72l-.24-.24a.52.52,0,0,0-.73,0L8,7,6.16,5.2a.49.49,0,0,0-.72,0l-.24.24a.49.49,0,0,0,0,.72L7,8,5.2,9.79a.52.52,0,0,0,0,.73l.24.24a.51.51,0,0,0,.72,0L8,9l1.81,1.81a.52.52,0,0,0,.73,0l.24-.24a.52.52,0,0,0,0-.73Z",
            y: "0",
            x: "360",
            transform: "translate(-16 -16) scale(2)",
            width: "80",
            height: "80"
          }
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/create.vue?vue&type=template&id=35cd8454&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/question/create.vue?vue&type=template&id=35cd8454& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("Создание вопроса")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { "aria-hidden": "true" },
                        on: { click: _vm.closeModal }
                      },
                      [_vm._v("×")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm.createIsDone
                  ? _c("div", [
                      _vm._v(
                        "\n                            Вопрос успешно создан\n                        "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.createIsDone
                  ? _c(
                      "form",
                      {
                        attrs: { id: "create_question_form" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submitQuestion($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v(
                              "\n                                    Название вопроса\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "name", name: "name" },
                            domProps: { value: _vm.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group form-check" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "checkbox",
                              id: "is_first",
                              name: "is_first"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "is_first" }
                            },
                            [_vm._v("Первый вопрос")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("editor", {
                          ref: "toastuiEditor",
                          attrs: {
                            language: _vm.editorOptions.language,
                            initialEditType: _vm.editorOptions.initialEditType,
                            height: "350px"
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit", value: "Сохранить" }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/edit.vue?vue&type=template&id=38f2fc64&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/question/edit.vue?vue&type=template&id=38f2fc64& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("Редактирование вопроса")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: { "aria-hidden": "true" },
                        on: { click: _vm.closeModal }
                      },
                      [_vm._v("×")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm.editIsDone
                  ? _c("div", [
                      _vm._v(
                        "\n                            Вопрос успешно отредактирован\n                        "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn", on: { click: _vm.addToMarkdown } },
                  [
                    _vm._v(
                      "\n                            addToMarkdown\n                        "
                    )
                  ]
                ),
                _vm._v(" "),
                !_vm.editIsDone
                  ? _c(
                      "form",
                      {
                        attrs: { id: "edit_question_form" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submitQuestion($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v(
                              "\n                                    Название вопроса\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "name", name: "name" },
                            domProps: { value: _vm.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group form-check" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.is_first,
                                expression: "is_first"
                              }
                            ],
                            staticClass: "form-check-input",
                            attrs: {
                              type: "checkbox",
                              id: "is_first",
                              name: "is_first"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.is_first)
                                ? _vm._i(_vm.is_first, null) > -1
                                : _vm.is_first
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.is_first,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.is_first = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.is_first = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.is_first = $$c
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "is_first" }
                            },
                            [
                              _vm._v(
                                "\n                                    Первый вопрос\n                                "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm.text.length
                          ? _c("editor", {
                              ref: "toastuiEditor",
                              attrs: {
                                initialValue: _vm.text,
                                language: _vm.editorOptions.language,
                                initialEditType:
                                  _vm.editorOptions.initialEditType,
                                height: "350px"
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit", value: "Сохранить" }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/index.vue?vue&type=template&id=272449e8&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditScript/question/index.vue?vue&type=template&id=272449e8& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    { staticClass: "q_a_wrapper" },
    [
      _c("defs", [
        _c(
          "marker",
          {
            attrs: {
              id: "arrow",
              markerWidth: "20",
              markerHeight: "20",
              refX: "10",
              refY: "3",
              orient: "auto",
              markerUnits: "strokeWidth"
            }
          },
          [_c("path", { attrs: { d: "M0,0 L0,6 L9,3 z", fill: "#4294ff" } })]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.pathsCoords, function(pathCoords, key) {
        return _c("path", {
          key: key,
          attrs: {
            d: pathCoords.value,
            fill: "transparent",
            stroke: "#4294ff",
            "stroke-width": "1",
            "marker-end": "url(#arrow)"
          }
        })
      }),
      _vm._v(" "),
      _c(
        "g",
        {
          ref: "box",
          staticClass: "question_with_answer",
          style: _vm.cursor,
          attrs: { id: _vm.question.id, transform: _vm.stylesCoords }
        },
        [
          _c(
            "g",
            { on: { mousedown: _vm.drag, mouseup: _vm.drop } },
            [
              _c(
                "foreignObject",
                { attrs: { x: "0", y: "15", width: "100", height: "150" } },
                [
                  _c(
                    "div",
                    { attrs: { xmlns: "http://www.w3.org/1999/xhtml" } },
                    [
                      _c(
                        "text",
                        { attrs: { fill: "#000", y: "24", x: "30" } },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.question.name) +
                              "\n                    "
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("rect", {
                staticClass: "question for_bind",
                attrs: {
                  id: _vm.question.id,
                  width: "200",
                  height: "40",
                  fill: "transparent",
                  stroke: "#cfcfcf",
                  "stroke-width": "1"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "g",
            {
              staticClass: "question add-answer",
              on: { mousedown: _vm.addAnswerMousedown }
            },
            [
              _c("circle", {
                attrs: {
                  cy: "40",
                  cx: "100",
                  r: "10",
                  stroke: "#cfcfcf",
                  "stroke-width": "1",
                  fill: "#fff"
                }
              }),
              _vm._v(" "),
              _c("path", {
                staticStyle: { fill: "#2f700f" },
                attrs: {
                  d:
                    "M108.66,48.66h2.57a.51.51,0,0,0,.51-.51v-.34a.51.51,0,0,0-.51-.52h-2.57V44.73a.51.51,0,0,0-.51-.52h-.34a.52.52,0,0,0-.52.52v2.56h-2.56a.52.52,0,0,0-.52.52v.34a.51.51,0,0,0,.52.51h2.56v2.57a.51.51,0,0,0,.52.51h.34a.51.51,0,0,0,.51-.51Z",
                  y: "0",
                  x: "280",
                  transform: "translate(-40 -22) scale(1.3)",
                  width: "80",
                  height: "80"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "g",
            {
              staticClass: "question edit-question",
              on: { click: _vm.editQuestion }
            },
            [
              _c("circle", {
                attrs: {
                  cy: "0",
                  cx: "200",
                  r: "10",
                  stroke: "#cfcfcf",
                  "stroke-width": "1",
                  fill: "#fff"
                }
              }),
              _vm._v(" "),
              _c("path", {
                staticStyle: { fill: "#4294ff" },
                attrs: {
                  d:
                    "M206.68,11.07l-2-2,4.83-4.83,2,2Zm-2.19-1.65,1.83,1.83-2.74.92Zm7.63-3.8-.35.35-2-2,.35-.35a.89.89,0,0,1,1.26,0l.74.74A.89.89,0,0,1,212.12,5.62Z",
                  y: "0",
                  x: "200",
                  transform: "translate(-70 -10) scale(1.3)",
                  width: "80",
                  height: "80"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "g",
            { staticClass: "question delete", on: { click: _vm.deleteQ } },
            [
              _c("circle", {
                attrs: {
                  cy: "0",
                  cx: "0",
                  r: "10",
                  stroke: "#cfcfcf",
                  "stroke-width": "1",
                  fill: "#fff"
                }
              }),
              _vm._v(" "),
              _c("path", {
                staticStyle: { fill: "#f00" },
                attrs: {
                  d:
                    "M9,8l1.81-1.82a.51.51,0,0,0,0-.72l-.24-.24a.52.52,0,0,0-.73,0L8,7,6.16,5.2a.49.49,0,0,0-.72,0l-.24.24a.49.49,0,0,0,0,.72L7,8,5.2,9.79a.52.52,0,0,0,0,.73l.24.24a.51.51,0,0,0,.72,0L8,9l1.81,1.81a.52.52,0,0,0,.73,0l.24-.24a.52.52,0,0,0,0-.73Z",
                  y: "0",
                  x: "360",
                  transform: "translate(-12 -12) scale(1.5)",
                  width: "80",
                  height: "80"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.answers, function(answer) {
        return _c("answer", {
          key: answer.id,
          attrs: { answerId: answer.id },
          on: {
            "click-answer-edit": function($event) {
              return _vm.clickEditAnswer(answer.id)
            },
            "answer-change": _vm.changeAnswers,
            "answer-deleted": _vm.deletePathCoordsAndAnswerByAnswerId,
            "click-answer-bind-to-next-question": _vm.clickBindToNextQuestion
          }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditScript.vue?vue&type=template&id=51daf754&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditScript.vue?vue&type=template&id=51daf754& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "edit-script__wrapper" },
    [
      0 == _vm.questionsInCurrentScript.length && _vm.questionsIsLoaded
        ? _c("div", [
            _vm._v(
              "\n        Для создания вопроса кликните 2 раза левой кнопкой мыши\n    "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "svg",
        {
          ref: "dynamicLine",
          staticClass: "edit-script",
          attrs: { id: "svg", width: "100%", height: "100%" },
          on: { dblclick: _vm.createQuestion }
        },
        [
          _c(
            "g",
            { attrs: { id: "transform-wrapper", transform: "scale(1 1)" } },
            _vm._l(_vm.questionsInCurrentScript, function(question) {
              return _c("question", {
                key: question.id,
                attrs: {
                  questionId: question.id,
                  questionsIsLoaded: _vm.questionsIsLoaded
                },
                on: {
                  "click-question-edit": function($event) {
                    return _vm.selectEditQuestion(question.id)
                  },
                  "click-answer-edit": _vm.selectEditAnswer,
                  "click-answer-add-mousedown": _vm.drag,
                  "click-answer-bind-to-next-question": _vm.dragForBind
                }
              })
            }),
            1
          ),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d: _vm.pathCoords,
              transform: _vm.stylesCoords,
              fill: "transparent",
              stroke: "#4294ff",
              "stroke-width": "1",
              "marker-end": "url(#arrow)"
            }
          })
        ]
      ),
      _vm._v(" "),
      _vm.CreatingUpdatingState.creatingQuestion
        ? _c("create-question", {
            attrs: { newQuestionCoords: _vm.newQuestionCoords },
            on: {
              "close-modal": _vm.closeAllModal,
              created: _vm.updateQuestions
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.CreatingUpdatingState.editingQuestion
        ? _c("edit-question", {
            attrs: { current: _vm.currentEditQuestionId },
            on: { "close-modal": _vm.closeAllModal }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.CreatingUpdatingState.creatingAnswer
        ? _c("create-answer", {
            attrs: {
              currentQuestion: _vm.currentEditQuestionId,
              newAnswerCoords: _vm.newAnswerCoords
            },
            on: { "close-modal": _vm.closeAllModal }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.CreatingUpdatingState.editingAnswer
        ? _c("edit-answer", {
            attrs: {
              currentQuestion: _vm.currentEditQuestionId,
              current: _vm.currentEditAnswerId
            },
            on: { "close-modal": _vm.closeAllModal }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/bus/index.js":
/*!***********************************!*\
  !*** ./resources/js/bus/index.js ***!
  \***********************************/
/*! exports provided: bus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bus", function() { return bus; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var bus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();

/***/ }),

/***/ "./resources/js/components/EditScript/answer/create.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/EditScript/answer/create.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_49342d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=49342d3e& */ "./resources/js/components/EditScript/answer/create.vue?vue&type=template&id=49342d3e&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/EditScript/answer/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_49342d3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_49342d3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditScript/answer/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditScript/answer/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/EditScript/answer/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditScript/answer/create.vue?vue&type=template&id=49342d3e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/EditScript/answer/create.vue?vue&type=template&id=49342d3e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_49342d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=49342d3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/create.vue?vue&type=template&id=49342d3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_49342d3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_49342d3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EditScript/answer/edit.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/EditScript/answer/edit.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_7652a5cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=7652a5cc& */ "./resources/js/components/EditScript/answer/edit.vue?vue&type=template&id=7652a5cc&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/EditScript/answer/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_7652a5cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_7652a5cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditScript/answer/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditScript/answer/edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/EditScript/answer/edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditScript/answer/edit.vue?vue&type=template&id=7652a5cc&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/EditScript/answer/edit.vue?vue&type=template&id=7652a5cc& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_7652a5cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=7652a5cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/edit.vue?vue&type=template&id=7652a5cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_7652a5cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_7652a5cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EditScript/answer/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/EditScript/answer/index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d48c6500___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d48c6500& */ "./resources/js/components/EditScript/answer/index.vue?vue&type=template&id=d48c6500&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/EditScript/answer/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/EditScript/answer/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d48c6500___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d48c6500___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditScript/answer/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditScript/answer/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/EditScript/answer/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditScript/answer/index.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/EditScript/answer/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/EditScript/answer/index.vue?vue&type=template&id=d48c6500&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/EditScript/answer/index.vue?vue&type=template&id=d48c6500& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d48c6500___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d48c6500& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/answer/index.vue?vue&type=template&id=d48c6500&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d48c6500___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d48c6500___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EditScript/question/create.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/EditScript/question/create.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_35cd8454___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=35cd8454& */ "./resources/js/components/EditScript/question/create.vue?vue&type=template&id=35cd8454&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/EditScript/question/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_35cd8454___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_35cd8454___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditScript/question/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditScript/question/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/EditScript/question/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditScript/question/create.vue?vue&type=template&id=35cd8454&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/EditScript/question/create.vue?vue&type=template&id=35cd8454& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_35cd8454___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=35cd8454& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/create.vue?vue&type=template&id=35cd8454&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_35cd8454___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_35cd8454___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EditScript/question/edit.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/EditScript/question/edit.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_38f2fc64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=38f2fc64& */ "./resources/js/components/EditScript/question/edit.vue?vue&type=template&id=38f2fc64&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/EditScript/question/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_38f2fc64___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_38f2fc64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditScript/question/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditScript/question/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/EditScript/question/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditScript/question/edit.vue?vue&type=template&id=38f2fc64&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/EditScript/question/edit.vue?vue&type=template&id=38f2fc64& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_38f2fc64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=38f2fc64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/edit.vue?vue&type=template&id=38f2fc64&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_38f2fc64___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_38f2fc64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EditScript/question/index.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/EditScript/question/index.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_272449e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=272449e8& */ "./resources/js/components/EditScript/question/index.vue?vue&type=template&id=272449e8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/EditScript/question/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/EditScript/question/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_272449e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_272449e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditScript/question/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditScript/question/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/EditScript/question/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditScript/question/index.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/EditScript/question/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/EditScript/question/index.vue?vue&type=template&id=272449e8&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/EditScript/question/index.vue?vue&type=template&id=272449e8& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_272449e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=272449e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditScript/question/index.vue?vue&type=template&id=272449e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_272449e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_272449e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/functions/createStuff.js":
/*!***********************************************!*\
  !*** ./resources/js/functions/createStuff.js ***!
  \***********************************************/
/*! exports provided: createAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnswer", function() { return createAnswer; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function createAnswer(payload) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/answer/create', payload);
}

/***/ }),

/***/ "./resources/js/functions/delay.js":
/*!*****************************************!*\
  !*** ./resources/js/functions/delay.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return delay; });
function delay(s) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, s * 1000);
  });
}

/***/ }),

/***/ "./resources/js/functions/deleteStuff.js":
/*!***********************************************!*\
  !*** ./resources/js/functions/deleteStuff.js ***!
  \***********************************************/
/*! exports provided: deleteAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAnswer", function() { return deleteAnswer; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function deleteAnswer(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]('/api/answer/delete/?id=' + id);
}

/***/ }),

/***/ "./resources/js/functions/getStuffById.js":
/*!************************************************!*\
  !*** ./resources/js/functions/getStuffById.js ***!
  \************************************************/
/*! exports provided: getQuestionById, getAnswerById, getAnswerStatusById, getAnswersOfQuestionById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestionById", function() { return getQuestionById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnswerById", function() { return getAnswerById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnswerStatusById", function() { return getAnswerStatusById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnswersOfQuestionById", function() { return getAnswersOfQuestionById; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function getQuestionById(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/question/getQuestionById/?id=' + id);
}
function getAnswerById(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/answer/getAnswerById/?id=' + id);
}
function getAnswerStatusById(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/status/getStatusById/?id=' + id);
}
function getAnswersOfQuestionById(_x) {
  return _getAnswersOfQuestionById.apply(this, arguments);
}

function _getAnswersOfQuestionById() {
  _getAnswersOfQuestionById = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
    var _yield$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/answer/getAnswersOfQuestionById/?id=' + id);

          case 3:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getAnswersOfQuestionById.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/functions/serializeFormByDomSelector.js":
/*!**************************************************************!*\
  !*** ./resources/js/functions/serializeFormByDomSelector.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return serializeFormByDomSelector; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var $ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
function serializeFormByDomSelector(selector) {
  var serializedFormArray = $(selector).serializeArray();
  var objFormData = {};
  $.each(serializedFormArray, function () {
    objFormData[this.name] = this.value;
  });
  return objFormData;
}

/***/ }),

/***/ "./resources/js/functions/updateStuff.js":
/*!***********************************************!*\
  !*** ./resources/js/functions/updateStuff.js ***!
  \***********************************************/
/*! exports provided: updateAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAnswer", function() { return updateAnswer; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function updateAnswer(_ref) {
  var id = _ref.id,
      data = _ref.data;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch('/api/answer/update/?id=' + id, data);
}

/***/ }),

/***/ "./resources/js/settings/editorOptions.js":
/*!************************************************!*\
  !*** ./resources/js/settings/editorOptions.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  language: 'ru',
  initialEditType: 'wysiwyg'
});

/***/ }),

/***/ "./resources/js/views/EditScript.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/EditScript.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditScript_vue_vue_type_template_id_51daf754___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditScript.vue?vue&type=template&id=51daf754& */ "./resources/js/views/EditScript.vue?vue&type=template&id=51daf754&");
/* harmony import */ var _EditScript_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditScript.vue?vue&type=script&lang=js& */ "./resources/js/views/EditScript.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditScript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditScript.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/EditScript.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditScript_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditScript_vue_vue_type_template_id_51daf754___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditScript_vue_vue_type_template_id_51daf754___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/EditScript.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/EditScript.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/EditScript.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditScript_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditScript.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditScript.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditScript_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/EditScript.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/EditScript.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditScript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditScript.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditScript.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditScript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditScript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditScript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditScript_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/EditScript.vue?vue&type=template&id=51daf754&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/EditScript.vue?vue&type=template&id=51daf754& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditScript_vue_vue_type_template_id_51daf754___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditScript.vue?vue&type=template&id=51daf754& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditScript.vue?vue&type=template&id=51daf754&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditScript_vue_vue_type_template_id_51daf754___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditScript_vue_vue_type_template_id_51daf754___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);