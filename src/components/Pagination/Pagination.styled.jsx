import { css } from "@emotion/css";

export const containerCss = css`
  display: flex;
  justify-content: center;
`;

export const breakCss = css`
  cursor: pointer;

  margin-right: 10px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const breakLinkCss = css`
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding-bottom: 2px;

  transition: color 150ms ease, transform 150ms ease;

  &:hover {
    color: var(--color-accent);

    @media screen and (min-width: 768px) {
      transform: scale(1.5) translateY(-5px);
    }
  }
`;

export const pageCss = css`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;

  transition: color 150ms ease, background-color 150ms ease,
    box-shadow 150ms ease, transform 150ms ease;

  &:not(:nth-last-child(2)) {
    margin-right: 10px;
  }

  &:hover {
    color: #fff;
    background-color: var(--color-accent);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 2px 1px -1px rgb(0 0 0 / 12%);
    transform: scale(1.1);
  }

  @media screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
`;

export const pageLinkCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  font-weight: 500;
`;

export const activePageCss = css`
  background-color: var(--color-accent);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 2px 1px -1px rgb(0 0 0 / 12%);
  transform: scale(1.1);
`;

export const activeLinkCss = css`
  color: #fff;
`;

export const arrowItemsCss = css`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }

  &.previous {
    margin-right: 40px;

    @media screen and (max-width: 767px) {
      margin-right: 20px;
    }
  }

  &.next {
    margin-left: 40px;

    @media screen and (max-width: 767px) {
      margin-left: 20px;
    }
  }
`;

export const arrowLinksCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #f7f7f7;

  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 2px 1px -1px rgb(0 0 0 / 12%);

  transition: color 150ms ease, background-color 150ms ease,
    transform 150ms ease;

  &[aria-disabled="true"] {
    cursor: default;
    box-shadow: none;
    color: #bdbdbd;
  }

  &:hover:not([aria-disabled="true"]) {
    color: #fff;
    background-color: var(--color-accent);
    transform: scale(1.1);
  }
`;

export const disabledCss = css`
  cursor: default;
  box-shadow: none;
`;
