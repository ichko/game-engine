/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

window.onresize = () => {
    // init();
};

let animationFrame = undefined;
// function init() {

    let [ ctx, width, height ] = (() => {
        let canvas = document.getElementById('canvas');
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        let ctx = canvas.getContext('2d');
        ctx.translate(innerWidth / 2, innerHeight / 2);
        ctx.scale(1.05, -1.05);

        return [ ctx, innerWidth, innerHeight ];
    })();


    let {
        Utils, IO, Vector,
        CanvasRenderer, Scene, Engine,
        SpringyVector, Parallax, Circle,

        Player, AsteroidField,
        Environment, Controller
    } = App.load().get();


    let io = new IO(width, height);
    let renderer = new CanvasRenderer(ctx, width, height);
    let scene = new Scene();
    let engine = new Engine(renderer, scene);

    let controller = new Controller(io, width, height);
    let player = new Player(controller);
    let camera = new SpringyVector({
        position: new Vector(0, 50), elasticity: 0.08, damping: 0.3,
        target: () => player.position.copy().add(player.velocity.copy().scale(3))
    });

    let parallax = new Parallax(camera.position);
    let enviroment = new Environment(camera, width, height);


    io.onMouse(() => player.speed = 5, () => player.speed = 0);
    enviroment.container.forEach(layer => parallax.addLayer({ depth: layer.depth, objects: layer.objects }));
    parallax.addLayer({ objects: [player, new AsteroidField(player, Math.max(width, height))] });
    scene.add(parallax, controller, camera);


    cancelAnimationFrame(animationFrame);
    (function animation() {
        engine.clear().render().update();
        enviroment.outOfBounds();

        parallax.zoom = 50 / (player.velocity.length() * 3 + 30);

        animationFrame = requestAnimationFrame(animation);
    })();

// }
// init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmIxMDc0ZDI0ODlkYWNkMDc5ZDgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7OztBQUdBO0FBQ0EsNkRBQTZELDZDQUE2QztBQUMxRyx1QkFBdUIsd0VBQXdFO0FBQy9GOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxVIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmIxMDc0ZDI0ODlkYWNkMDc5ZDgiLCJ3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBpbml0KCk7XHJcbn07XHJcblxyXG5sZXQgYW5pbWF0aW9uRnJhbWUgPSB1bmRlZmluZWQ7XHJcbi8vIGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG4gICAgbGV0IFsgY3R4LCB3aWR0aCwgaGVpZ2h0IF0gPSAoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoaW5uZXJXaWR0aCAvIDIsIGlubmVySGVpZ2h0IC8gMik7XHJcbiAgICAgICAgY3R4LnNjYWxlKDEuMDUsIC0xLjA1KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFsgY3R4LCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCBdO1xyXG4gICAgfSkoKTtcclxuXHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBVdGlscywgSU8sIFZlY3RvcixcclxuICAgICAgICBDYW52YXNSZW5kZXJlciwgU2NlbmUsIEVuZ2luZSxcclxuICAgICAgICBTcHJpbmd5VmVjdG9yLCBQYXJhbGxheCwgQ2lyY2xlLFxyXG5cclxuICAgICAgICBQbGF5ZXIsIEFzdGVyb2lkRmllbGQsXHJcbiAgICAgICAgRW52aXJvbm1lbnQsIENvbnRyb2xsZXJcclxuICAgIH0gPSBBcHAubG9hZCgpLmdldCgpO1xyXG5cclxuXHJcbiAgICBsZXQgaW8gPSBuZXcgSU8od2lkdGgsIGhlaWdodCk7XHJcbiAgICBsZXQgcmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGxldCBzY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG4gICAgbGV0IGVuZ2luZSA9IG5ldyBFbmdpbmUocmVuZGVyZXIsIHNjZW5lKTtcclxuXHJcbiAgICBsZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKGlvLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKGNvbnRyb2xsZXIpO1xyXG4gICAgbGV0IGNhbWVyYSA9IG5ldyBTcHJpbmd5VmVjdG9yKHtcclxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcigwLCA1MCksIGVsYXN0aWNpdHk6IDAuMDgsIGRhbXBpbmc6IDAuMyxcclxuICAgICAgICB0YXJnZXQ6ICgpID0+IHBsYXllci5wb3NpdGlvbi5jb3B5KCkuYWRkKHBsYXllci52ZWxvY2l0eS5jb3B5KCkuc2NhbGUoMykpXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoY2FtZXJhLnBvc2l0aW9uKTtcclxuICAgIGxldCBlbnZpcm9tZW50ID0gbmV3IEVudmlyb25tZW50KGNhbWVyYSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG5cclxuICAgIGlvLm9uTW91c2UoKCkgPT4gcGxheWVyLnNwZWVkID0gNSwgKCkgPT4gcGxheWVyLnNwZWVkID0gMCk7XHJcbiAgICBlbnZpcm9tZW50LmNvbnRhaW5lci5mb3JFYWNoKGxheWVyID0+IHBhcmFsbGF4LmFkZExheWVyKHsgZGVwdGg6IGxheWVyLmRlcHRoLCBvYmplY3RzOiBsYXllci5vYmplY3RzIH0pKTtcclxuICAgIHBhcmFsbGF4LmFkZExheWVyKHsgb2JqZWN0czogW3BsYXllciwgbmV3IEFzdGVyb2lkRmllbGQocGxheWVyLCBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSldIH0pO1xyXG4gICAgc2NlbmUuYWRkKHBhcmFsbGF4LCBjb250cm9sbGVyLCBjYW1lcmEpO1xyXG5cclxuXHJcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XHJcbiAgICAoZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGVuZ2luZS5jbGVhcigpLnJlbmRlcigpLnVwZGF0ZSgpO1xyXG4gICAgICAgIGVudmlyb21lbnQub3V0T2ZCb3VuZHMoKTtcclxuXHJcbiAgICAgICAgcGFyYWxsYXguem9vbSA9IDUwIC8gKHBsYXllci52ZWxvY2l0eS5sZW5ndGgoKSAqIDMgKyAzMCk7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbiAgICB9KSgpO1xyXG5cclxuLy8gfVxyXG4vLyBpbml0KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9