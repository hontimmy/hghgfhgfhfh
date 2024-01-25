/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Property1IconProperty2Smiley } from "../../icons/Property1IconProperty2Smiley";

interface Props {
  property1: "two-tone" | "icon" | "bulk";
  property2:
    | "arrow-up-square"
    | "filter-3"
    | "info-circle"
    | "show"
    | "three-user"
    | "paper-negative"
    | "message"
    | "swap"
    | "paper"
    | "location"
    | "volume-up"
    | "filter-2"
    | "ticket"
    | "chat"
    | "arrow-down-2"
    | "scan"
    | "profile"
    | "logout"
    | "lock"
    | "login"
    | "activity"
    | "info-square"
    | "paper-download"
    | "paper-fail"
    | "arrow-right-circle"
    | "arrow-down-square"
    | "notification"
    | "arrow-up"
    | "download"
    | "arrow-left"
    | "arrow-left-3"
    | "shield-done"
    | "arrow-down-3"
    | "search"
    | "arrow-left-square"
    | "bag-2"
    | "arrow-down-circle"
    | "hide"
    | "folder"
    | "smiley"
    | "voice-2"
    | "volume-off"
    | "time-circle"
    | "edit"
    | "call"
    | "image"
    | "time-square"
    | "arrow-right-square"
    | "buy"
    | "discovery"
    | "call-silent"
    | "bag"
    | "paper-upload"
    | "arrow-up-circle"
    | "game"
    | "chart"
    | "send"
    | "heart"
    | "category"
    | "call-missed"
    | "arrow-left-2"
    | "setting"
    | "camera"
    | "calendar"
    | "arrow-right-2"
    | "home"
    | "arrow-up-2"
    | "discount"
    | "more-square"
    | "arrow-right-3"
    | "play"
    | "arrow-down"
    | "delete"
    | "calling"
    | "filter"
    | "arrow-up-3"
    | "ticket-star"
    | "danger"
    | "voice"
    | "document"
    | "bookmark"
    | "arrow-right"
    | "image-2"
    | "close-square"
    | "graph"
    | "volume-down"
    | "unlock"
    | "add-user"
    | "two-user"
    | "arrow-left-circle"
    | "star"
    | "paper-plus"
    | "edit-square"
    | "video"
    | "shield-fail"
    | "tick-square"
    | "work"
    | "password"
    | "wallet"
    | "plus"
    | "more-circle"
    | "upload";
  propertyBulkClassName: any;
}

export const Iconly = ({ property1, property2, propertyBulkClassName }: Props): JSX.Element => {
  return (
    <>
      {((property1 === "bulk" && property2 === "activity") ||
        (property1 === "bulk" && property2 === "bag") ||
        (property1 === "bulk" && property2 === "bookmark") ||
        (property1 === "bulk" && property2 === "buy") ||
        (property1 === "bulk" && property2 === "camera") ||
        (property1 === "bulk" && property2 === "category") ||
        (property1 === "bulk" && property2 === "danger") ||
        (property1 === "bulk" && property2 === "discount") ||
        (property1 === "bulk" && property2 === "document") ||
        (property1 === "bulk" && property2 === "folder") ||
        (property1 === "bulk" && property2 === "game") ||
        (property1 === "bulk" && property2 === "hide") ||
        (property1 === "bulk" && property2 === "image") ||
        (property1 === "bulk" && property2 === "info-circle") ||
        (property1 === "bulk" && property2 === "info-square") ||
        (property1 === "bulk" && property2 === "location") ||
        (property1 === "bulk" && property2 === "lock") ||
        (property1 === "bulk" && property2 === "more-circle") ||
        (property1 === "bulk" && property2 === "more-square") ||
        (property1 === "bulk" && property2 === "paper") ||
        (property1 === "bulk" && property2 === "password") ||
        (property1 === "bulk" && property2 === "scan") ||
        (property1 === "bulk" && property2 === "send") ||
        (property1 === "bulk" && property2 === "show") ||
        (property1 === "bulk" && property2 === "unlock") ||
        (property1 === "bulk" && property2 === "volume-off") ||
        (property1 === "bulk" && property2 === "wallet") ||
        (property1 === "bulk" && property2 === "work") ||
        (property1 === "two-tone" && property2 === "call-missed") ||
        (property1 === "two-tone" && property2 === "close-square") ||
        (property1 === "two-tone" && property2 === "paper-download") ||
        (property1 === "two-tone" && property2 === "paper-fail") ||
        (property1 === "two-tone" && property2 === "paper-plus") ||
        (property1 === "two-tone" && property2 === "paper-upload") ||
        (property1 === "two-tone" && property2 === "plus") ||
        (property1 === "two-tone" && property2 === "shield-fail") ||
        (property1 === "two-tone" && property2 === "voice-2") ||
        (property1 === "two-tone" && property2 === "voice") ||
        property2 === "arrow-down-2" ||
        property2 === "arrow-down-3" ||
        property2 === "arrow-down-circle" ||
        property2 === "arrow-down-square" ||
        property2 === "arrow-down" ||
        property2 === "arrow-left-2" ||
        property2 === "arrow-left-3" ||
        property2 === "arrow-left-circle" ||
        property2 === "arrow-left-square" ||
        property2 === "arrow-left" ||
        property2 === "arrow-right-2" ||
        property2 === "arrow-right-3" ||
        property2 === "arrow-right-circle" ||
        property2 === "arrow-right-square" ||
        property2 === "arrow-right" ||
        property2 === "arrow-up-2" ||
        property2 === "arrow-up-3" ||
        property2 === "arrow-up-circle" ||
        property2 === "arrow-up-square" ||
        property2 === "arrow-up" ||
        property2 === "calendar") && (
        <div
          className={`w-[24px] h-[24px] ${
            property2 === "arrow-down-2" ||
            property2 === "arrow-down-3" ||
            property2 === "arrow-down-circle" ||
            property2 === "arrow-down-square" ||
            property2 === "arrow-down" ||
            property2 === "arrow-left-2" ||
            property2 === "arrow-left-3" ||
            property2 === "arrow-left-circle" ||
            property2 === "arrow-left-square" ||
            property2 === "arrow-left" ||
            property2 === "arrow-right-2" ||
            property2 === "arrow-right-3" ||
            property2 === "arrow-right-circle" ||
            property2 === "arrow-right-square" ||
            property2 === "arrow-right" ||
            property2 === "arrow-up-2" ||
            property2 === "arrow-up-3" ||
            property2 === "arrow-up-circle" ||
            property2 === "arrow-up-square" ||
            property2 === "arrow-up"
              ? "bg-[100%_100%]"
              : ""
          } ${property2 === "bag" ? "rotate-180" : ""} ${
            property1 === "bulk" && property2 === "arrow-right-circle"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---right-circle.svg)]"
              : property2 === "arrow-right" && property1 === "bulk"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---right.svg)]"
              : property1 === "bulk" && property2 === "arrow-right-square"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---right-square.svg)]"
              : property1 === "bulk" && property2 === "arrow-right-2"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---right-2.svg)]"
              : property1 === "bulk" && property2 === "arrow-right-3"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---right-3.svg)]"
              : property1 === "bulk" && property2 === "arrow-up-circle"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---up-circle.svg)]"
              : property1 === "bulk" && property2 === "arrow-up"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---up.svg)]"
              : property1 === "bulk" && property2 === "arrow-up-square"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---up-square.svg)]"
              : property1 === "bulk" && property2 === "arrow-up-2"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---up-2.svg)]"
              : property1 === "bulk" && property2 === "arrow-up-3"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---up-3.svg)]"
              : property1 === "bulk" && property2 === "arrow-left-circle"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---left-circle.svg)]"
              : property1 === "bulk" && property2 === "arrow-left"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---left.svg)]"
              : property1 === "bulk" && property2 === "arrow-left-square"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---left-square.svg)]"
              : property2 === "arrow-left-2" && property1 === "bulk"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---left-2.svg)]"
              : property1 === "bulk" && property2 === "arrow-left-3"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---left-3.svg)]"
              : property2 === "arrow-down-circle" && property1 === "bulk"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---down-circle.svg)]"
              : property1 === "bulk" && property2 === "arrow-down"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---down.svg)]"
              : property1 === "bulk" && property2 === "arrow-down-square"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---down-square.svg)]"
              : property1 === "bulk" && property2 === "arrow-down-2"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---down-2.svg)]"
              : property2 === "arrow-down-3" && property1 === "bulk"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-bulk-arrow---down-3.svg)]"
              : property1 === "two-tone" && property2 === "arrow-right-circle"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---right-circle.svg)]"
              : property2 === "arrow-right" && property1 === "two-tone"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---right.svg)]"
              : property1 === "two-tone" && property2 === "arrow-right-square"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---right-square.svg)]"
              : property1 === "two-tone" && property2 === "arrow-right-2"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---right-2.svg)]"
              : property1 === "two-tone" && property2 === "arrow-right-3"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---right-3.svg)]"
              : property1 === "two-tone" && property2 === "arrow-up-circle"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---up-circle.svg)]"
              : property1 === "two-tone" && property2 === "arrow-up"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---up.svg)]"
              : property1 === "two-tone" && property2 === "arrow-up-square"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---up-square.svg)]"
              : property1 === "two-tone" && property2 === "arrow-up-2"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---up-2.svg)]"
              : property1 === "two-tone" && property2 === "arrow-up-3"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---up-3.svg)]"
              : property1 === "two-tone" && property2 === "arrow-left-circle"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---left-circle.svg)]"
              : property1 === "two-tone" && property2 === "arrow-left"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---left.svg)]"
              : property2 === "arrow-left-square" && property1 === "two-tone"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---left-square.svg)]"
              : property2 === "arrow-left-2" && property1 === "two-tone"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---left-2.svg)]"
              : property1 === "two-tone" && property2 === "arrow-left-3"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---left-3.svg)]"
              : property2 === "arrow-down-circle" && property1 === "two-tone"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---down-circle.svg)]"
              : property1 === "two-tone" && property2 === "arrow-down"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---down.svg)]"
              : property2 === "arrow-down-square" && property1 === "two-tone"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---down-square.svg)]"
              : property2 === "arrow-down-2" && property1 === "two-tone"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---down-2.svg)]"
              : property2 === "arrow-down-3" && property1 === "two-tone"
              ? "bg-[url(https://c.animaapp.com/yghahd5A/img/iconly-two-tone-arrow---down-3.svg)]"
              : ""
          } ${propertyBulkClassName}`}
        >
          {(property2 === "activity" ||
            property2 === "bag" ||
            property2 === "bookmark" ||
            property2 === "buy" ||
            property2 === "calendar" ||
            property2 === "call-missed" ||
            property2 === "camera" ||
            property2 === "category" ||
            property2 === "close-square" ||
            property2 === "danger" ||
            property2 === "discount" ||
            property2 === "document" ||
            property2 === "folder" ||
            property2 === "game" ||
            property2 === "hide" ||
            property2 === "image" ||
            property2 === "info-circle" ||
            property2 === "info-square" ||
            property2 === "location" ||
            property2 === "lock" ||
            property2 === "more-circle" ||
            property2 === "more-square" ||
            property2 === "paper-download" ||
            property2 === "paper-fail" ||
            property2 === "paper-plus" ||
            property2 === "paper-upload" ||
            property2 === "paper" ||
            property2 === "password" ||
            property2 === "plus" ||
            property2 === "scan" ||
            property2 === "send" ||
            property2 === "shield-fail" ||
            property2 === "show" ||
            property2 === "unlock" ||
            property2 === "voice-2" ||
            property2 === "voice" ||
            property2 === "volume-off" ||
            property2 === "wallet" ||
            property2 === "work") && (
            <div
              className={`relative ${
                ["lock", "paper", "unlock"].includes(property2)
                  ? "w-[17px]"
                  : property2 === "bookmark" ||
                    property2 === "paper-download" ||
                    property2 === "paper-fail" ||
                    property2 === "paper-plus" ||
                    property2 === "paper-upload" ||
                    property2 === "voice-2" ||
                    property2 === "voice"
                  ? "w-[16px]"
                  : ["bag", "calendar", "close-square", "document"].includes(property2)
                  ? "w-[18px]"
                  : property2 === "scan"
                  ? "w-[22px]"
                  : property2 === "location"
                  ? "w-[14px]"
                  : property2 === "shield-fail"
                  ? "w-[15px]"
                  : ["call-missed", "volume-off"].includes(property2)
                  ? "w-[19px]"
                  : "w-[20px]"
              } ${
                property2 === "bookmark" ||
                property2 === "lock" ||
                property2 === "paper-download" ||
                property2 === "paper-fail" ||
                property2 === "paper-plus" ||
                property2 === "paper-upload" ||
                property2 === "paper" ||
                property2 === "shield-fail" ||
                property2 === "unlock" ||
                property2 === "voice-2" ||
                property2 === "voice"
                  ? "left-[4px]"
                  : ["bag", "calendar", "close-square", "document", "volume-off"].includes(property2)
                  ? "left-[3px]"
                  : property2 === "scan"
                  ? "left-px"
                  : property2 === "location"
                  ? "left-[5px]"
                  : "left-[2px]"
              } ${
                property2 === "camera" ||
                property2 === "close-square" ||
                property2 === "danger" ||
                property2 === "paper-download" ||
                property2 === "paper-fail" ||
                property2 === "paper-plus" ||
                property2 === "paper-upload" ||
                property2 === "scan" ||
                property2 === "shield-fail" ||
                property2 === "voice" ||
                property2 === "volume-off" ||
                property2 === "wallet"
                  ? "top-[3px]"
                  : ["hide", "show"].includes(property2)
                  ? "top-[4px]"
                  : "top-[2px]"
              } ${
                property2 === "danger" ||
                property2 === "discount" ||
                property2 === "document" ||
                property2 === "image" ||
                property2 === "info-circle" ||
                property2 === "info-square" ||
                property2 === "more-circle" ||
                property2 === "more-square" ||
                property2 === "paper" ||
                property2 === "password" ||
                property2 === "send" ||
                property2 === "show" ||
                property2 === "wallet"
                  ? "bg-[100%_100%]"
                  : ""
              } ${
                property2 === "camera" ||
                property2 === "close-square" ||
                property2 === "danger" ||
                property2 === "paper-download" ||
                property2 === "paper-fail" ||
                property2 === "paper-plus" ||
                property2 === "paper-upload" ||
                property2 === "scan" ||
                property2 === "wallet"
                  ? "h-[18px]"
                  : property2 === "show"
                  ? "h-[16px]"
                  : property2 === "hide"
                  ? "h-[17px]"
                  : ["call-missed", "shield-fail", "voice", "volume-off"].includes(property2)
                  ? "h-[19px]"
                  : "h-[20px]"
              } ${
                property2 === "paper"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-3.svg)]"
                  : property2 === "document"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/path.svg)]"
                  : property2 === "more-circle"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-1-1.svg)]"
                  : ["info-square", "more-square"].includes(property2)
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-1-13.svg)]"
                  : property2 === "wallet"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-1-4.svg)]"
                  : property2 === "show"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-1-5.svg)]"
                  : property2 === "image"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-1-7.svg)]"
                  : property2 === "send"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-1-9.svg)]"
                  : property2 === "password"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-1-10.svg)]"
                  : property2 === "discount"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-1-11.svg)]"
                  : property2 === "info-circle"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-1-12.svg)]"
                  : property2 === "danger"
                  ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-5.svg)]"
                  : ""
              }`}
            >
              {(property1 === "two-tone" ||
                property2 === "activity" ||
                property2 === "bookmark" ||
                property2 === "camera" ||
                property2 === "category" ||
                property2 === "folder" ||
                property2 === "hide" ||
                property2 === "lock" ||
                property2 === "unlock" ||
                property2 === "volume-off" ||
                property2 === "wallet" ||
                property2 === "work") && (
                <div
                  className={`relative ${
                    property2 === "wallet"
                      ? "w-[6px]"
                      : ["paper-download", "paper-fail", "paper-plus", "paper-upload", "shield-fail"].includes(
                          property2
                        )
                      ? "w-[17px]"
                      : ["calendar", "close-square"].includes(property2)
                      ? "w-[20px]"
                      : property2 === "plus"
                      ? "w-[22px]"
                      : property2 === "call-missed"
                      ? "w-[21px]"
                      : ""
                  } ${
                    property2 === "wallet"
                      ? "left-[14px]"
                      : property2 === "calendar" ||
                        property2 === "call-missed" ||
                        property2 === "close-square" ||
                        property2 === "paper-download" ||
                        property2 === "paper-fail" ||
                        property2 === "paper-plus" ||
                        property2 === "paper-upload" ||
                        property2 === "plus" ||
                        property2 === "shield-fail"
                      ? "-left-px"
                      : ""
                  } ${
                    property2 === "wallet"
                      ? "top-[7px]"
                      : property2 === "calendar" ||
                        property2 === "close-square" ||
                        property2 === "paper-download" ||
                        property2 === "paper-fail" ||
                        property2 === "paper-plus" ||
                        property2 === "paper-upload" ||
                        property2 === "plus" ||
                        property2 === "shield-fail" ||
                        property2 === "voice"
                      ? "-top-px"
                      : ""
                  } ${
                    property2 === "call-missed" ||
                    property2 === "paper-download" ||
                    property2 === "paper-fail" ||
                    property2 === "paper-plus" ||
                    property2 === "paper-upload" ||
                    property2 === "shield-fail" ||
                    property2 === "wallet"
                      ? "bg-[100%_100%]"
                      : ""
                  } ${
                    property2 === "camera"
                      ? "h-[18px]"
                      : property2 === "wallet"
                      ? "h-[4px]"
                      : ["calendar", "plus"].includes(property2)
                      ? "h-[22px]"
                      : property2 === "hide"
                      ? "h-[17px]"
                      : property2 === "call-missed"
                      ? "h-[21px]"
                      : property2 === "volume-off"
                      ? "h-[19px]"
                      : "h-[20px]"
                  } ${
                    property2 === "wallet"
                      ? "bg-[url(https://c.animaapp.com/yghahd5A/img/fill-4.svg)]"
                      : property2 === "paper-plus"
                      ? "bg-[url(https://c.animaapp.com/yghahd5A/img/stroke-1.svg)]"
                      : property2 === "shield-fail"
                      ? "bg-[url(https://c.animaapp.com/yghahd5A/img/stroke-1-1.svg)]"
                      : property2 === "paper-download"
                      ? "bg-[url(https://c.animaapp.com/yghahd5A/img/stroke-1-2.svg)]"
                      : property2 === "paper-fail"
                      ? "bg-[url(https://c.animaapp.com/yghahd5A/img/stroke-1-3.svg)]"
                      : property2 === "paper-upload"
                      ? "bg-[url(https://c.animaapp.com/yghahd5A/img/stroke-1-4.svg)]"
                      : property2 === "call-missed"
                      ? "bg-[url(https://c.animaapp.com/yghahd5A/img/stroke-1-5.svg)]"
                      : ""
                  }`}
                >
                  {(property2 === "activity" ||
                    property2 === "bookmark" ||
                    property2 === "calendar" ||
                    property2 === "call-missed" ||
                    property2 === "camera" ||
                    property2 === "category" ||
                    property2 === "close-square" ||
                    property2 === "folder" ||
                    property2 === "hide" ||
                    property2 === "lock" ||
                    property2 === "paper-download" ||
                    property2 === "paper-fail" ||
                    property2 === "paper-plus" ||
                    property2 === "paper-upload" ||
                    property2 === "plus" ||
                    property2 === "shield-fail" ||
                    property2 === "unlock" ||
                    property2 === "voice-2" ||
                    property2 === "voice" ||
                    property2 === "volume-off" ||
                    property2 === "work") && (
                    <img
                      className={`absolute ${
                        property2 === "shield-fail"
                          ? "w-[5px]"
                          : ["bookmark", "call-missed", "category"].includes(property2)
                          ? "w-[8px]"
                          : ["folder", "hide", "work"].includes(property2)
                          ? "w-[20px]"
                          : property2 === "camera"
                          ? "w-[10px]"
                          : property2 === "plus"
                          ? "w-[9px]"
                          : ["voice-2", "voice"].includes(property2)
                          ? "w-[16px]"
                          : property2 === "close-square"
                          ? "w-[6px]"
                          : property2 === "lock"
                          ? "w-[17px]"
                          : property2 === "unlock"
                          ? "w-[11px]"
                          : property2 === "volume-off"
                          ? "w-[13px]"
                          : property2 === "calendar"
                          ? "w-[19px]"
                          : property2 === "activity"
                          ? "w-[18px]"
                          : "w-[7px]"
                      } ${
                        ["camera", "plus", "shield-fail"].includes(property2)
                          ? "left-[6px]"
                          : property2 === "call-missed"
                          ? "left-[13px]"
                          : property2 === "category"
                          ? "left-[12px]"
                          : ["paper-download", "paper-fail", "paper-plus", "paper-upload"].includes(property2)
                          ? "left-[10px]"
                          : property2 === "close-square"
                          ? "left-[7px]"
                          : property2 === "unlock"
                          ? "left-[3px]"
                          : "left-0"
                      } ${
                        ["calendar", "close-square", "lock", "shield-fail"].includes(property2)
                          ? "top-[7px]"
                          : property2 === "bookmark"
                          ? "top-[12px]"
                          : ["camera", "plus"].includes(property2)
                          ? "top-[6px]"
                          : ["voice-2", "voice"].includes(property2)
                          ? "top-[8px]"
                          : property2 === "work"
                          ? "top-[9px]"
                          : property2 === "activity"
                          ? "top-[2px]"
                          : "top-0"
                      } ${
                        property2 === "shield-fail"
                          ? "h-[5px]"
                          : ["bookmark", "call-missed", "camera"].includes(property2)
                          ? "h-[8px]"
                          : property2 === "folder"
                          ? "h-[10px]"
                          : ["category", "plus"].includes(property2)
                          ? "h-[9px]"
                          : property2 === "hide"
                          ? "h-[16px]"
                          : ["voice-2", "voice"].includes(property2)
                          ? "h-[12px]"
                          : property2 === "close-square"
                          ? "h-[6px]"
                          : property2 === "lock"
                          ? "h-[13px]"
                          : ["activity", "volume-off"].includes(property2)
                          ? "h-[18px]"
                          : property2 === "calendar"
                          ? "h-[2px]"
                          : property2 === "work"
                          ? "h-[11px]"
                          : "h-[7px]"
                      }`}
                      alt="Union"
                      src={
                        property2 === "shield-fail"
                          ? "https://c.animaapp.com/yghahd5A/img/union-6.svg"
                          : property2 === "call-missed"
                          ? "https://c.animaapp.com/yghahd5A/img/union-10.svg"
                          : property2 === "folder"
                          ? "https://c.animaapp.com/yghahd5A/img/folder-2.svg"
                          : property2 === "bookmark"
                          ? "https://c.animaapp.com/yghahd5A/img/bookmark-2.svg"
                          : property2 === "camera"
                          ? "https://c.animaapp.com/yghahd5A/img/combined-shape-2.svg"
                          : property2 === "category"
                          ? "https://c.animaapp.com/yghahd5A/img/fill-1-3.svg"
                          : property2 === "plus"
                          ? "https://c.animaapp.com/yghahd5A/img/union-2.svg"
                          : property2 === "hide"
                          ? "https://c.animaapp.com/yghahd5A/img/fill-1-6.svg"
                          : property2 === "voice"
                          ? "https://c.animaapp.com/yghahd5A/img/union-3.svg"
                          : property2 === "voice-2"
                          ? "https://c.animaapp.com/yghahd5A/img/union-4.svg"
                          : property2 === "paper-fail"
                          ? "https://c.animaapp.com/yghahd5A/img/stroke-3-2.svg"
                          : property2 === "close-square"
                          ? "https://c.animaapp.com/yghahd5A/img/union-11.svg"
                          : property2 === "lock"
                          ? "https://c.animaapp.com/yghahd5A/img/fill-1-14.svg"
                          : property2 === "unlock"
                          ? "https://c.animaapp.com/yghahd5A/img/fill-1-15.svg"
                          : property2 === "volume-off"
                          ? "https://c.animaapp.com/yghahd5A/img/combined-shape-17.svg"
                          : property2 === "calendar"
                          ? "https://c.animaapp.com/yghahd5A/img/line-200.svg"
                          : property2 === "work"
                          ? "https://c.animaapp.com/yghahd5A/img/fill-1-8.svg"
                          : property2 === "activity"
                          ? "https://c.animaapp.com/yghahd5A/img/path-34168.svg"
                          : property2 === "paper-download"
                          ? "https://c.animaapp.com/yghahd5A/img/stroke-3-1.svg"
                          : "https://c.animaapp.com/yghahd5A/img/stroke-3-3.svg"
                      }
                    />
                  )}

                  {(property2 === "bookmark" ||
                    property2 === "calendar" ||
                    property2 === "camera" ||
                    property2 === "category" ||
                    property2 === "close-square" ||
                    property2 === "folder" ||
                    property2 === "hide" ||
                    property2 === "lock" ||
                    property2 === "paper-fail" ||
                    property2 === "paper-plus" ||
                    property2 === "paper-upload" ||
                    property2 === "plus" ||
                    property2 === "unlock" ||
                    property2 === "voice-2" ||
                    property2 === "voice" ||
                    property2 === "volume-off" ||
                    property2 === "work") && (
                    <img
                      className={`absolute ${
                        property2 === "bookmark"
                          ? "w-[16px]"
                          : property2 === "paper-plus"
                          ? "w-[6px]"
                          : property2 === "plus"
                          ? "w-[22px]"
                          : ["hide", "unlock"].includes(property2)
                          ? "w-[17px]"
                          : ["voice-2", "voice"].includes(property2)
                          ? "w-[9px]"
                          : property2 === "paper-fail"
                          ? "w-[5px]"
                          : property2 === "paper-upload"
                          ? "w-[7px]"
                          : property2 === "lock"
                          ? "w-[11px]"
                          : property2 === "volume-off"
                          ? "w-[19px]"
                          : property2 === "work"
                          ? "w-[2px]"
                          : property2 === "calendar"
                          ? "w-[10px]"
                          : "w-[20px]"
                      } ${
                        ["calendar", "paper-plus", "paper-upload"].includes(property2)
                          ? "left-[5px]"
                          : property2 === "hide"
                          ? "left-[2px]"
                          : ["voice-2", "voice"].includes(property2)
                          ? "left-[4px]"
                          : property2 === "paper-fail"
                          ? "left-[6px]"
                          : property2 === "lock"
                          ? "left-[3px]"
                          : property2 === "work"
                          ? "left-[9px]"
                          : "left-0"
                      } ${
                        property2 === "folder"
                          ? "top-[3px]"
                          : ["paper-fail", "paper-plus"].includes(property2)
                          ? "top-[8px]"
                          : ["paper-upload", "unlock"].includes(property2)
                          ? "top-[7px]"
                          : property2 === "work"
                          ? "top-[13px]"
                          : property2 === "calendar"
                          ? "top-[11px]"
                          : "top-0"
                      } ${
                        ["folder", "hide"].includes(property2)
                          ? "h-[17px]"
                          : property2 === "camera"
                          ? "h-[18px]"
                          : property2 === "paper-plus"
                          ? "h-[6px]"
                          : property2 === "plus"
                          ? "h-[22px]"
                          : ["unlock", "voice-2", "voice"].includes(property2)
                          ? "h-[13px]"
                          : ["calendar", "paper-fail"].includes(property2)
                          ? "h-[5px]"
                          : property2 === "paper-upload"
                          ? "h-[8px]"
                          : property2 === "lock"
                          ? "h-[7px]"
                          : property2 === "volume-off"
                          ? "h-[19px]"
                          : property2 === "work"
                          ? "h-[3px]"
                          : "h-[20px]"
                      }`}
                      alt="Folder"
                      src={
                        property2 === "bookmark"
                          ? "https://c.animaapp.com/yghahd5A/img/bookmark.svg"
                          : property2 === "camera"
                          ? "https://c.animaapp.com/yghahd5A/img/path-1.svg"
                          : property2 === "category"
                          ? "https://c.animaapp.com/yghahd5A/img/combined-shape-6.svg"
                          : property2 === "paper-plus"
                          ? "https://c.animaapp.com/yghahd5A/img/union.svg"
                          : property2 === "plus"
                          ? "https://c.animaapp.com/yghahd5A/img/path-3.svg"
                          : property2 === "hide"
                          ? "https://c.animaapp.com/yghahd5A/img/combined-shape-8.svg"
                          : property2 === "voice"
                          ? "https://c.animaapp.com/yghahd5A/img/stroke-5.svg"
                          : property2 === "voice-2"
                          ? "https://c.animaapp.com/yghahd5A/img/union-5.svg"
                          : property2 === "paper-fail"
                          ? "https://c.animaapp.com/yghahd5A/img/union-8.svg"
                          : property2 === "paper-upload"
                          ? "https://c.animaapp.com/yghahd5A/img/union-9.svg"
                          : property2 === "close-square"
                          ? "https://c.animaapp.com/yghahd5A/img/stroke-3-4.svg"
                          : property2 === "lock"
                          ? "https://c.animaapp.com/yghahd5A/img/fill-4-3.svg"
                          : property2 === "unlock"
                          ? "https://c.animaapp.com/yghahd5A/img/fill-4-4.svg"
                          : property2 === "volume-off"
                          ? "https://c.animaapp.com/yghahd5A/img/fill-5-1.svg"
                          : property2 === "work"
                          ? "https://c.animaapp.com/yghahd5A/img/fill-4-2.svg"
                          : property2 === "calendar"
                          ? "https://c.animaapp.com/yghahd5A/img/union-1.svg"
                          : "https://c.animaapp.com/yghahd5A/img/folder.svg"
                      }
                    />
                  )}

                  {["activity", "paper-download"].includes(property2) && (
                    <div
                      className={`absolute ${property2 === "paper-download" ? "w-[7px]" : "w-[5px]"} ${
                        property2 === "paper-download" ? "left-[5px]" : "left-[15px]"
                      } ${property1 === "bulk" ? "opacity-40" : ""} ${
                        property2 === "paper-download" ? "top-[7px]" : "top-0"
                      } ${property2 === "paper-download" ? "bg-[100%_100%]" : ""} ${
                        property2 === "paper-download" ? "h-[8px]" : "h-[5px]"
                      } ${
                        property2 === "paper-download"
                          ? "bg-[url(https://c.animaapp.com/yghahd5A/img/union-7.svg)]"
                          : ""
                      } ${property1 === "bulk" ? "rounded-[2.5px]" : ""} ${property1 === "bulk" ? "bg-[#200e32]" : ""}`}
                    />
                  )}

                  {property2 === "wallet" && (
                    <div className="relative w-[2px] h-[2px] top-px left-px bg-[#200e32] rounded-[1px]" />
                  )}

                  {["calendar", "work"].includes(property2) && (
                    <img
                      className={`top-0 absolute ${property1 === "bulk" ? "w-[20px]" : "w-[2px]"} ${
                        property1 === "bulk" ? "left-0" : "left-[13px]"
                      } ${property1 === "bulk" ? "h-[13px]" : "h-[5px]"}`}
                      alt="Line"
                      src={
                        property1 === "bulk"
                          ? "https://c.animaapp.com/yghahd5A/img/fill-6.svg"
                          : "https://c.animaapp.com/yghahd5A/img/line-207.svg"
                      }
                    />
                  )}

                  {property2 === "calendar" && (
                    <>
                      <img
                        className="absolute w-[2px] h-[5px] top-0 left-[5px]"
                        alt="Line"
                        src="https://c.animaapp.com/yghahd5A/img/line-208.svg"
                      />
                      <img
                        className="absolute w-[20px] h-[20px] top-[2px] left-0"
                        alt="Path"
                        src="https://c.animaapp.com/yghahd5A/img/path-2.svg"
                      />
                    </>
                  )}
                </div>
              )}

              {((property1 === "bulk" && property2 === "calendar") ||
                property2 === "bag" ||
                property2 === "buy" ||
                property2 === "danger" ||
                property2 === "discount" ||
                property2 === "document" ||
                property2 === "game" ||
                property2 === "image" ||
                property2 === "info-circle" ||
                property2 === "info-square" ||
                property2 === "location" ||
                property2 === "more-circle" ||
                property2 === "more-square" ||
                property2 === "paper" ||
                property2 === "password" ||
                property2 === "scan" ||
                property2 === "send" ||
                property2 === "show") && (
                <img
                  className={`absolute ${
                    ["paper", "show"].includes(property2)
                      ? "w-[5px]"
                      : property2 === "game"
                      ? "w-[6px]"
                      : ["buy", "location"].includes(property2)
                      ? "w-[14px]"
                      : property2 === "document"
                      ? "w-[9px]"
                      : ["more-circle", "more-square"].includes(property2)
                      ? "w-[11px]"
                      : property2 === "image"
                      ? "w-[15px]"
                      : ["discount", "send"].includes(property2)
                      ? "w-[7px]"
                      : property2 === "password"
                      ? "w-[12px]"
                      : ["danger", "info-circle", "info-square"].includes(property2)
                      ? "w-[2px]"
                      : "w-[18px]"
                  } ${
                    property2 === "paper"
                      ? "left-[12px]"
                      : property2 === "scan"
                      ? "left-[2px]"
                      : property2 === "bag"
                      ? "left-[-2966px]"
                      : property2 === "game"
                      ? "left-[6px]"
                      : property2 === "show"
                      ? "left-[8px]"
                      : property2 === "image"
                      ? "left-[3px]"
                      : ["calendar", "location", "send"].includes(property2)
                      ? "left-0"
                      : property2 === "discount"
                      ? "left-[7px]"
                      : ["danger", "info-circle", "info-square"].includes(property2)
                      ? "left-[9px]"
                      : "left-[4px]"
                  } ${
                    property2 === "bag"
                      ? "top-[-1422px]"
                      : property2 === "buy"
                      ? "top-[17px]"
                      : ["document", "info-circle", "info-square"].includes(property2)
                      ? "top-[5px]"
                      : ["more-circle", "more-square"].includes(property2)
                      ? "top-[9px]"
                      : ["danger", "show"].includes(property2)
                      ? "top-[6px]"
                      : property2 === "image"
                      ? "top-[4px]"
                      : property2 === "send"
                      ? "top-[12px]"
                      : ["calendar", "discount", "password"].includes(property2)
                      ? "top-[7px]"
                      : "top-0"
                  } ${
                    ["danger", "scan", "send"].includes(property2)
                      ? "h-[8px]"
                      : property2 === "bag"
                      ? "h-[15px]"
                      : property2 === "game"
                      ? "h-[4px]"
                      : property2 === "buy"
                      ? "h-[3px]"
                      : property2 === "document"
                      ? "h-[11px]"
                      : ["more-circle", "more-square"].includes(property2)
                      ? "h-[2px]"
                      : property2 === "image"
                      ? "h-[14px]"
                      : property2 === "discount"
                      ? "h-[7px]"
                      : ["info-circle", "info-square"].includes(property2)
                      ? "h-[9px]"
                      : property2 === "location"
                      ? "h-[17px]"
                      : property2 === "calendar"
                      ? "h-[13px]"
                      : "h-[5px]"
                  }`}
                  alt="Fill"
                  src={
                    property2 === "scan"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-5.svg"
                      : property2 === "bag"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-7.svg"
                      : property2 === "game"
                      ? "https://c.animaapp.com/yghahd5A/img/game-2.svg"
                      : property2 === "buy"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-16.svg"
                      : property2 === "document"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-1.svg"
                      : property2 === "more-circle"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-3.svg"
                      : property2 === "more-square"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-4.svg"
                      : property2 === "show"
                      ? "https://c.animaapp.com/yghahd5A/img/fill-4-1.svg"
                      : property2 === "image"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-9.svg"
                      : property2 === "send"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-10.svg"
                      : property2 === "password"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-11.svg"
                      : property2 === "discount"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-12.svg"
                      : property2 === "info-circle"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-13.svg"
                      : property2 === "info-square"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-14.svg"
                      : property2 === "danger"
                      ? "https://c.animaapp.com/yghahd5A/img/combined-shape-15.svg"
                      : property2 === "location"
                      ? "https://c.animaapp.com/yghahd5A/img/path-34175.svg"
                      : property2 === "calendar"
                      ? "https://c.animaapp.com/yghahd5A/img/fill-1-16.svg"
                      : "https://c.animaapp.com/yghahd5A/img/fill-1.svg"
                  }
                />
              )}

              {["bag", "buy", "game", "paper", "scan"].includes(property2) && (
                <img
                  className={`absolute ${
                    property2 === "paper"
                      ? "w-[7px]"
                      : property2 === "scan"
                      ? "w-[22px]"
                      : property2 === "bag"
                      ? "w-[10px]"
                      : "w-[20px]"
                  } ${property2 === "paper" ? "left-[5px]" : property2 === "bag" ? "left-[-2962px]" : "left-0"} ${
                    property2 === "scan"
                      ? "top-[9px]"
                      : property2 === "bag"
                      ? "top-[-1427px]"
                      : property2 === "game"
                      ? "top-[4px]"
                      : property2 === "buy"
                      ? "top-0"
                      : "top-[8px]"
                  } ${
                    property2 === "scan"
                      ? "h-[9px]"
                      : property2 === "bag"
                      ? "h-[5px]"
                      : property2 === "game"
                      ? "h-[16px]"
                      : property2 === "buy"
                      ? "h-[15px]"
                      : "h-[6px]"
                  }`}
                  alt="Combined shape"
                  src={
                    property2 === "scan"
                      ? "https://c.animaapp.com/yghahd5A/img/fill-7.svg"
                      : property2 === "bag"
                      ? "https://c.animaapp.com/yghahd5A/img/path-34167.svg"
                      : property2 === "game"
                      ? "https://c.animaapp.com/yghahd5A/img/game.svg"
                      : property2 === "buy"
                      ? "https://c.animaapp.com/yghahd5A/img/fill-7-1.svg"
                      : "https://c.animaapp.com/yghahd5A/img/combined-shape.svg"
                  }
                />
              )}

              {(property2 === "location" || (property1 === "bulk" && property2 === "calendar")) && (
                <div
                  className={`absolute ${property2 === "calendar" ? "w-[18px]" : "w-[10px]"} ${
                    property2 === "calendar" ? "left-0" : "left-[2px]"
                  } ${property2 === "location" ? "opacity-40" : ""} ${
                    property2 === "calendar" ? "top-0" : "top-[18px]"
                  } ${property2 === "calendar" ? "h-[7px]" : "h-[2px]"} ${
                    property2 === "location" ? "rounded-[5px/1px]" : ""
                  } ${property2 === "location" ? "bg-[#200e32]" : ""}`}
                >
                  {property2 === "calendar" && (
                    <>
                      <img
                        className="absolute w-[18px] h-[6px] top-px left-0"
                        alt="Fill"
                        src="https://c.animaapp.com/yghahd5A/img/fill-4-5.svg"
                      />
                      <img
                        className="absolute w-[2px] h-[5px] top-0 left-[5px]"
                        alt="Fill"
                        src="https://c.animaapp.com/yghahd5A/img/fill-6-1.svg"
                      />
                      <img
                        className="absolute w-[2px] h-[5px] top-0 left-[12px]"
                        alt="Fill"
                        src="https://c.animaapp.com/yghahd5A/img/fill-9.svg"
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {((property1 === "bulk" && property2 === "call-missed") ||
        (property1 === "bulk" && property2 === "close-square") ||
        (property1 === "bulk" && property2 === "paper-download") ||
        (property1 === "bulk" && property2 === "paper-fail") ||
        (property1 === "bulk" && property2 === "paper-plus") ||
        (property1 === "bulk" && property2 === "paper-upload") ||
        (property1 === "bulk" && property2 === "plus") ||
        (property1 === "bulk" && property2 === "shield-fail") ||
        (property1 === "bulk" && property2 === "voice-2") ||
        (property1 === "bulk" && property2 === "voice") ||
        (property1 === "two-tone" && property2 === "activity") ||
        (property1 === "two-tone" && property2 === "bag") ||
        (property1 === "two-tone" && property2 === "bookmark") ||
        (property1 === "two-tone" && property2 === "buy") ||
        (property1 === "two-tone" && property2 === "camera") ||
        (property1 === "two-tone" && property2 === "category") ||
        (property1 === "two-tone" && property2 === "danger") ||
        (property1 === "two-tone" && property2 === "discount") ||
        (property1 === "two-tone" && property2 === "document") ||
        (property1 === "two-tone" && property2 === "folder") ||
        (property1 === "two-tone" && property2 === "game") ||
        (property1 === "two-tone" && property2 === "hide") ||
        (property1 === "two-tone" && property2 === "image") ||
        (property1 === "two-tone" && property2 === "info-circle") ||
        (property1 === "two-tone" && property2 === "info-square") ||
        (property1 === "two-tone" && property2 === "location") ||
        (property1 === "two-tone" && property2 === "lock") ||
        (property1 === "two-tone" && property2 === "more-circle") ||
        (property1 === "two-tone" && property2 === "more-square") ||
        (property1 === "two-tone" && property2 === "paper") ||
        (property1 === "two-tone" && property2 === "password") ||
        (property1 === "two-tone" && property2 === "scan") ||
        (property1 === "two-tone" && property2 === "send") ||
        (property1 === "two-tone" && property2 === "show") ||
        (property1 === "two-tone" && property2 === "unlock") ||
        (property1 === "two-tone" && property2 === "volume-off") ||
        (property1 === "two-tone" && property2 === "wallet") ||
        (property1 === "two-tone" && property2 === "work") ||
        property2 === "add-user" ||
        property2 === "bag-2" ||
        property2 === "call-silent" ||
        property2 === "call" ||
        property2 === "calling" ||
        property2 === "chart" ||
        property2 === "chat" ||
        property2 === "delete" ||
        property2 === "discovery" ||
        property2 === "download" ||
        property2 === "edit-square" ||
        property2 === "edit" ||
        property2 === "filter-2" ||
        property2 === "filter-3" ||
        property2 === "filter" ||
        property2 === "graph" ||
        property2 === "heart" ||
        property2 === "home" ||
        property2 === "image-2" ||
        property2 === "login" ||
        property2 === "logout" ||
        property2 === "message" ||
        property2 === "notification" ||
        property2 === "paper-negative" ||
        property2 === "play" ||
        property2 === "profile" ||
        property2 === "search" ||
        property2 === "setting" ||
        property2 === "shield-done" ||
        property2 === "star" ||
        property2 === "swap" ||
        property2 === "three-user" ||
        property2 === "tick-square" ||
        property2 === "ticket-star" ||
        property2 === "ticket" ||
        property2 === "time-circle" ||
        property2 === "time-square" ||
        property2 === "two-user" ||
        property2 === "upload" ||
        property2 === "video" ||
        property2 === "volume-down" ||
        property2 === "volume-up") && (
        <img
          className={`w-[24px] left-0 top-0 h-[24px] absolute ${propertyBulkClassName}`}
          alt="Property bulk"
          src={
            property1 === "bulk" && property2 === "search"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-search@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "setting"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-setting@21.329999923706055x.png"
              : property2 === "paper-plus"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-paper-plus@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "paper-negative"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-paper-negative@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "discovery"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-discovery@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "home"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-home@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "star"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-star@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "ticket"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-ticket@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "bag-2"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-bag-2@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "ticket-star"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-ticket-star@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "chart"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-chart@21.329999923706055x.png"
              : property2 === "heart" && property1 === "bulk"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-heart@21.329999923706055x.png"
              : property2 === "plus"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-plus@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "graph"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-graph@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "profile"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-profile@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "time-square"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-time-square@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "time-circle"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-time-circle@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "notification"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-notification@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "message"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-message@21.329999923706055x.png"
              : property2 === "search" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-search@21.329999923706055x.png"
              : property2 === "folder"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-folder@21.329999923706055x.png"
              : property2 === "wallet"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-wallet@21.329999923706055x.png"
              : property2 === "graph" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-graph@21.329999923706055x.png"
              : property2 === "bookmark"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-bookmark@21.329999923706055x.png"
              : property2 === "category"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-category@21.329999923706055x.png"
              : property2 === "home" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-home@21.329999923706055x.png"
              : property2 === "notification" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-notification@21.329999923706055x.png"
              : property2 === "chat"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-chat@21.329999923706055x.png"
              : property2 === "paper"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-paper@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "ticket-star"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-ticket-star@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "ticket"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-ticket@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "paper-negative"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-paper-negative@21.329999923706055x.png"
              : property2 === "more-square"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-more-square@21.329999923706055x.png"
              : property2 === "more-circle"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-more-circle@21.329999923706055x.png"
              : property2 === "camera"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-camera@21.329999923706055x.png"
              : property2 === "heart" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-heart@21.329999923706055x.png"
              : property2 === "scan"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-scan@21.329999923706055x.png"
              : property2 === "activity"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-activity@21.329999923706055x.png"
              : property2 === "message" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-message@21.329999923706055x.png"
              : property2 === "profile" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-profile@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "chart"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-chart@21.329999923706055x.png"
              : property2 === "game"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-game@21.329999923706055x.png"
              : property2 === "bag"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-bag@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "star"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-star@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "bag-2"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-bag-2@21.329999923706055x.png"
              : property2 === "time-square" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-time-square@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "discovery"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-discovery@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "time-circle"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-time-circle@21.329999923706055x.png"
              : property2 === "location"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-location@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "volume-up"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-volume-up@21.329999923706055x.png"
              : property2 === "document"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-document@21.329999923706055x.png"
              : property2 === "volume-down" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-volume-down@21.329999923706055x.png"
              : property2 === "volume-off"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-volume-off@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "setting"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-setting@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "edit-square"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-edit-square@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "play"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-play@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "shield-done"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-shield-done@21.329999923706055x.png"
              : property2 === "shield-fail"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-shield-fail@21.329999923706055x.png"
              : property2 === "voice"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-voice@21.329999923706055x.png"
              : property2 === "voice-2"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-voice-2@21.329999923706055x.png"
              : property2 === "delete" && property1 === "bulk"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-delete@21.329999923706055x.png"
              : property2 === "image"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-image@21.329999923706055x.png"
              : property2 === "delete" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-delete@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "edit-square"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-edit-square@21.329999923706055x.png"
              : property2 === "filter-2"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-filter-2@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "play"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-play@21.329999923706055x.png"
              : property2 === "shield-done" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-shield-done@21.329999923706055x.png"
              : property2 === "show"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-show@21.329999923706055x.png"
              : property2 === "hide"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-hide@21.329999923706055x.png"
              : property2 === "paper-fail"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-paper-fail@21.329999923706055x.png"
              : property2 === "paper-download"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-paper-download@21.329999923706055x.png"
              : property2 === "paper-upload"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-paper-upload@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "image-2"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-image-2@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "login"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-login@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "download"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-download@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "logout"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-logout@21.329999923706055x.png"
              : property2 === "upload" && property1 === "bulk"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-upload@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "add-user"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-add-user@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "two-user"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-2-user@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "three-user"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-3-user@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "swap"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-swap@21.329999923706055x.png"
              : property2 === "close-square"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-close-square@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "tick-square"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-tick-square@21.329999923706055x.png"
              : property2 === "buy"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-buy@21.329999923706055x.png"
              : property2 === "two-user" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-2-user@21.329999923706055x.png"
              : property2 === "call" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-call@21.329999923706055x.png"
              : property2 === "discount"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-discount@21.329999923706055x.png"
              : property2 === "add-user" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-add-user@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "image-2"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-image-2@21.329999923706055x.png"
              : property2 === "info-circle"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-info-circle@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "three-user"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-3-user@21.329999923706055x.png"
              : property2 === "calling" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-calling@21.329999923706055x.png"
              : property2 === "send"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-send@21.329999923706055x.png"
              : property2 === "info-square"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-info-square@21.329999923706055x.png"
              : property2 === "login" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-login@21.329999923706055x.png"
              : property2 === "swap" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-swap@21.329999923706055x.png"
              : property2 === "download" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-download@21.329999923706055x.png"
              : property2 === "work"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-work@21.329999923706055x.png"
              : property2 === "password"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-password@21.329999923706055x.png"
              : property2 === "danger"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-danger@21.329999923706055x.png"
              : property2 === "logout" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-logout@21.329999923706055x.png"
              : property2 === "call-silent" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-call-silent@21.329999923706055x.png"
              : property2 === "lock"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-lock@21.329999923706055x.png"
              : property2 === "tick-square" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-tick-square@21.329999923706055x.png"
              : property2 === "upload" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-upload@21.329999923706055x.png"
              : property2 === "unlock"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-unlock@21.329999923706055x.png"
              : property2 === "call" && property1 === "bulk"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-call@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "calling"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-calling@21.329999923706055x.png"
              : property2 === "call-missed"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-call-missed@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "call-silent"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-call-silent@21.329999923706055x.png"
              : property2 === "filter" && property1 === "bulk"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-filter@21.329999923706055x.png"
              : property2 === "filter-3"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-filter-3@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "volume-up"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-volume-up@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "volume-down"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-volume-down@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "edit"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-edit@21.329999923706055x.png"
              : property1 === "bulk" && property2 === "video"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-bulk--property-2-video@21.329999923706055x.png"
              : property2 === "filter" && property1 === "two-tone"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-filter@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "video"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-video@21.329999923706055x.png"
              : property1 === "two-tone" && property2 === "edit"
              ? "https://c.animaapp.com/yghahd5A/img/property-1-two-tone--property-2-edit@21.329999923706055x.png"
              : undefined
          }
        />
      )}

      {property1 === "icon" && (
        <Property1IconProperty2Smiley className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" />
      )}
    </>
  );
};
