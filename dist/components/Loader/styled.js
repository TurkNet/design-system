"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearStyled = exports.linearbar = exports.MainStyled = exports.CircleStyled = void 0;
const tslib_1 = require("tslib");
const styled_components_1 = tslib_1.__importStar(require("styled-components"));
const styled_1 = require("../../utility/styled");
const animation_1 = require("../../shared/animation");
exports.CircleStyled = styled_components_1.default.div `
  height: ${styled_1.prop('size')}px;
  width: ${styled_1.prop('size')}px;
  display: inline-block;
  background-color: transparent;
  border-style: solid;
  border-width: 4px;
  border-color: transparent;
  border-top-color: ${styled_1.propColor()};
  border-right-color: ${styled_1.propColor()};
  border-bottom-color: ${styled_1.propColor()};
  border-radius: 100%;
  animation: ${animation_1.rotate360} 1s linear infinite;
`;
exports.MainStyled = styled_components_1.default.div `
  height: 64px;
  width: 64px;
  display: inline-block;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M1.215 32.687C.426 30.266 0 27.68 0 24.997 0 11.194 11.302 0 25.243 0c4.304 0 8.23 1.064 11.901 2.945 0 0 1.653 16.094-9.64 29.29 0 0-13.953 2.16-25.84.528' fill='%231A4784'/%3E%3Cpath d='M2.757 37.26c-.454-.798-.865-1.623-1.23-2.47 0 0 14.102 1.2 23.424-.363 0 0-3.35 3.566-8.753 6.696 0 0-7.048-1.034-13.24-3.785M28.189 33.947s6.788-1.199 12.421-3.31c0 0-2.954 7.036-5.668 10.474 0 0-7.351 1.323-15.57.441 0 0 6.046-3.98 8.625-7.384M43.056 7.952c2.211 9.576-1.644 20.185-1.644 20.185-5.213 2.22-11.249 3.443-11.249 3.443 9.448-12.27 8.603-27.37 8.603-27.37 1.54 1.03 2.963 2.227 4.246 3.561M49.722 23.098c-2.083 2.254-5.844 3.912-5.844 3.912 2.432-7.417 1.78-15.985 1.78-15.985 2.364 3.454 3.896 7.524 4.263 11.916M46.974 36.617c-3.191 2.347-9.195 3.818-9.195 3.818 2.874-3.755 5.246-10.829 5.246-10.829 4.58-1.97 6.975-4.015 6.975-4.015-.092 3.948-1.11 7.667-2.843 10.957M31.34 49.04c3.317-3.285 5.245-6.195 5.245-6.195 4.709-.97 8.628-2.55 8.628-2.55-3.462 4.43-8.394 7.673-14.074 9.018M11.109 45.816c2.433-.907 5.466-2.628 5.466-2.628 9.322 1.316 16.621.22 16.621.22-3.793 4.787-6.439 6.515-6.439 6.515-.658.051-1.322.077-1.995.077-5.113 0-9.872-1.507-13.846-4.095M5.074 40.435c3.095 1.157 8.279 2.222 8.279 2.222-3.318 1.436-4.539 1.722-4.539 1.722-1.476-1.19-2.81-2.546-3.98-4.033M25.887 17.25c.501-.105.9.186.895.647-.006.295-.175.59-.425.792l-2.942 2.286 1.14 2.62.034.092s.031.137.031.216c-.005.452-.412.907-.909 1.017-.22.05-.417.026-.573-.061l-2.595-1.433-2.661 2.492-.068.061c-.15.133-.337.234-.539.28-.507.114-.92-.166-.925-.62-.001-.127.02-.195.078-.353l1.295-3.168-2.888-1.112-.085-.033c-.231-.105-.38-.32-.385-.597-.006-.468.41-.94.928-1.05l.1-.013 3.476-.498.94-3.3c.109-.383.475-.726.901-.813.445-.092.83.11.92.477l.777 2.94 3.454-.863M20.197 4.56c.328-.115.592-.04.59.167 0 .132-.109.284-.272.41l-1.933 1.418.763 1.036.025.036s.02.06.02.095c-.003.206-.27.469-.6.587-.148.053-.277.068-.383.048L16.68 8.05l-1.778 1.5-.043.036c-.101.082-.226.155-.363.202-.336.12-.613.049-.613-.161 0-.057.015-.093.055-.173l.879-1.622-1.906-.12-.055-.003c-.148-.018-.248-.094-.248-.22 0-.212.278-.479.621-.597l.064-.019 2.29-.685.626-1.597c.073-.184.312-.382.59-.478.29-.098.544-.06.601.09l.513 1.203 2.267-.84M8.167 16.542c.047.138.04.318-.012.477l-.61 1.79.833.948.026.035s.036.057.048.093c.075.214.016.527-.134.698-.066.077-.138.114-.206.111l-1.118-.04-.477 1.808-.01.044c-.03.1-.075.192-.136.263-.15.173-.335.143-.415-.069-.023-.06-.025-.094-.033-.184l-.1-1.788-1.15.18-.033.006c-.097.007-.18-.057-.228-.184-.08-.217-.022-.535.131-.712l.032-.03 1.079-1.076-.24-1.766c-.03-.203.035-.453.165-.598.132-.153.297-.153.388-.005l.759 1.18 1.02-1.254' fill='%23C5CEE0'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 48px;
  background-position: center;

  ${exports.CircleStyled} {
    height: 100%;
    width: 100%;
  }
`;
exports.linearbar = styled_components_1.keyframes `
  0% { left: -100%; }
  100% { left: 100%; }
`;
exports.LinearStyled = styled_components_1.default.div `
  width: 100%;
  height: 4px;
  display: inline-block;
  position: relative;
  background: ${styled_1.color('sky.light')};
  overflow: hidden;
  :before {
    content: '';
    width: 40%;
    height: 4px;
    background: ${styled_1.color('primary.normal')};
    position: absolute;
    top: 0;
    left: -100%;
    animation: ${exports.linearbar} 3s linear infinite;
  }
`;
