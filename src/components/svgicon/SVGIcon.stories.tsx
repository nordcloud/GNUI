import { Meta, StoryObj } from "@storybook/react";
import CopyToClipboard from "react-copy-to-clipboard";
import { theme } from "../..";
import { FlexContainer } from "../container";
import { Text } from "../text";
import { SVGIcon } from "./SVGIcon";

const meta: Meta = {
  title: "Components/SVGIcon",
  component: SVGIcon,
};

export default meta;

export const Size: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <SVGIcon name="dashboard" size="sm" />
      <SVGIcon name="dashboard" />
      <SVGIcon name="dashboard" size="lg" />
      <SVGIcon name="dashboard" size="xl" />
      <SVGIcon name="dashboard" size="xxl" />
    </FlexContainer>
  ),

  name: "size",
};

export const Colors: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <SVGIcon name="dashboard" />
      <SVGIcon name="dashboard" color="success" />
      <SVGIcon name="dashboard" color="danger" />
      <SVGIcon name="dashboard" color="warning" />
      <SVGIcon name="dashboard" color="notification" />
      <SVGIcon name="dashboard" color={theme.color.support.purple} />
    </FlexContainer>
  ),

  name: "colors",
};

export const Data: StoryObj = {
  render: () => (
    <>
      <FlexContainer justifyContent="space-evenly">
        <CopyToClipboard text="archive">
          <FlexContainer direction="column">
            <SVGIcon name="archive" />
            <Text size="xs" mt=".25rem">
              archive
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="cloud">
          <FlexContainer direction="column">
            <SVGIcon name="cloud" />
            <Text size="xs" mt=".25rem">
              cloud
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="cloudOffline">
          <FlexContainer direction="column">
            <SVGIcon name="cloudOffline" />
            <Text size="xs" mt=".25rem">
              cloudOffline
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="cloudOnline">
          <FlexContainer direction="column">
            <SVGIcon name="cloudOnline" />
            <Text size="xs" mt=".25rem">
              cloudOnline
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="cloudWithDollar">
          <FlexContainer direction="column">
            <SVGIcon name="cloudWithDollar" />
            <Text size="xs" mt=".25rem">
              cloudWithDollar
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="cloudDataOnly">
          <FlexContainer direction="column">
            <SVGIcon name="cloudDataOnly" />
            <Text size="xs" mt=".25rem">
              cloudDataOnly
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="cloudQuestionMark">
          <FlexContainer direction="column">
            <SVGIcon name="cloudQuestionMark" />
            <Text size="xs" mt=".25rem">
              cloudQuestionMark
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="costs">
          <FlexContainer direction="column">
            <SVGIcon name="costs" />
            <Text size="xs" mt=".25rem">
              costs
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="equal">
          <FlexContainer direction="column">
            <SVGIcon name="equal" />
            <Text size="xs" mt=".25rem">
              equal
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="proportional">
          <FlexContainer direction="column">
            <SVGIcon name="proportional" />
            <Text size="xs" mt=".25rem">
              proportional
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="report">
          <FlexContainer direction="column">
            <SVGIcon name="report" />
            <Text size="xs" mt=".25rem">
              report
            </Text>
          </FlexContainer>
        </CopyToClipboard>
      </FlexContainer>
      <FlexContainer justifyContent="space-evenly">
        <CopyToClipboard text="chartDescending">
          <FlexContainer direction="column">
            <SVGIcon name="chartDescending" />
            <Text size="xs" mt=".25rem">
              chartDescending
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="cloudWaste">
          <FlexContainer direction="column">
            <SVGIcon name="cloudWaste" />
            <Text size="xs" mt=".25rem">
              cloudWaste
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="co2">
          <FlexContainer direction="column">
            <SVGIcon name="co2" />
            <Text size="xs" mt=".25rem">
              co2
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="co2Down">
          <FlexContainer direction="column">
            <SVGIcon name="co2Down" />
            <Text size="xs" mt=".25rem">
              co2Down
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="co2Up">
          <FlexContainer direction="column">
            <SVGIcon name="co2Up" />
            <Text size="xs" mt=".25rem">
              co2Up
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="smartphone">
          <FlexContainer direction="column">
            <SVGIcon name="smartphone" />
            <Text size="xs" mt=".25rem">
              smartphone
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="cars">
          <FlexContainer direction="column">
            <SVGIcon name="cars" />
            <Text size="xs" mt=".25rem">
              cars
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="change">
          <FlexContainer direction="column">
            <SVGIcon name="change" />
            <Text size="xs" mt=".25rem">
              change
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="virtualHost">
          <FlexContainer direction="column">
            <SVGIcon name="virtualHost" />
            <Text size="xs" mt=".25rem">
              virtualHost
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="database">
          <FlexContainer direction="column">
            <SVGIcon name="database" />
            <Text size="xs" mt=".25rem">
              database
            </Text>
          </FlexContainer>
        </CopyToClipboard>
      </FlexContainer>
      <FlexContainer justifyContent="space-evenly">
        <CopyToClipboard text="detailsView">
          <FlexContainer direction="column">
            <SVGIcon name="detailsView" />
            <Text size="xs" mt=".25rem">
              detailsView
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="listView">
          <FlexContainer direction="column">
            <SVGIcon name="listView" />
            <Text size="xs" mt=".25rem">
              listView
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="wizardView">
          <FlexContainer direction="column">
            <SVGIcon name="wizardView" />
            <Text size="xs" mt=".25rem">
              wizardView
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="application">
          <FlexContainer direction="column">
            <SVGIcon name="application" />
            <Text size="xs" mt=".25rem">
              application
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="dashboard">
          <FlexContainer direction="column">
            <SVGIcon name="dashboard" />
            <Text size="xs" mt=".25rem">
              dashboard
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="briefcase">
          <FlexContainer direction="column">
            <SVGIcon name="briefcase" />
            <Text size="xs" mt=".25rem">
              briefcase
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="checkList">
          <FlexContainer direction="column">
            <SVGIcon name="checkList" />
            <Text size="xs" mt=".25rem">
              checkList
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="api">
          <FlexContainer direction="column">
            <SVGIcon name="api" />
            <Text size="xs" mt=".25rem">
              api
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="dollar">
          <FlexContainer direction="column">
            <SVGIcon name="dollar" />
            <Text size="xs" mt=".25rem">
              dollar
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="euro">
          <FlexContainer direction="column">
            <SVGIcon name="euro" />
            <Text size="xs" mt=".25rem">
              euro
            </Text>
          </FlexContainer>
        </CopyToClipboard>
      </FlexContainer>
      <FlexContainer justifyContent="space-evenly">
        <CopyToClipboard text="mailInformation">
          <FlexContainer direction="column">
            <SVGIcon name="mailInformation" />
            <Text size="xs" mt=".25rem">
              mailInformation
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="mappingRules">
          <FlexContainer direction="column">
            <SVGIcon name="mappingRules" />
            <Text size="xs" mt=".25rem">
              mappingRules
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="otherType">
          <FlexContainer direction="column">
            <SVGIcon name="otherType" />
            <Text size="xs" mt=".25rem">
              otherType
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="resource">
          <FlexContainer direction="column">
            <SVGIcon name="resource" />
            <Text size="xs" mt=".25rem">
              resource
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="integration">
          <FlexContainer direction="column">
            <SVGIcon name="integration" />
            <Text size="xs" mt=".25rem">
              integration
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="reservedInstances">
          <FlexContainer direction="column">
            <SVGIcon name="reservedInstances" />
            <Text size="xs" mt=".25rem">
              reservedInstances
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="storage">
          <FlexContainer direction="column">
            <SVGIcon name="storage" />
            <Text size="xs" mt=".25rem">
              storage
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="budget">
          <FlexContainer direction="column">
            <SVGIcon name="budget" />
            <Text size="xs" mt=".25rem">
              budget
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="budgetEuro">
          <FlexContainer direction="column">
            <SVGIcon name="budgetEuro" />
            <Text size="xs" mt=".25rem">
              budgetEuro
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="production">
          <FlexContainer direction="column">
            <SVGIcon name="production" />
            <Text size="xs" mt=".25rem">
              production
            </Text>
          </FlexContainer>
        </CopyToClipboard>
      </FlexContainer>
      <FlexContainer justifyContent="space-evenly">
        <CopyToClipboard text="qa">
          <FlexContainer direction="column">
            <SVGIcon name="qa" />
            <Text size="xs" mt=".25rem">
              qa
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="test">
          <FlexContainer direction="column">
            <SVGIcon name="test" />
            <Text size="xs" mt=".25rem">
              test
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="flowchart">
          <FlexContainer direction="column">
            <SVGIcon name="flowchart" />
            <Text size="xs" mt=".25rem">
              flowchart
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="eventSchedule">
          <FlexContainer direction="column">
            <SVGIcon name="eventSchedule" />
            <Text size="xs" mt=".25rem">
              eventSchedule
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="eventList">
          <FlexContainer direction="column">
            <SVGIcon name="eventList" />
            <Text size="xs" mt=".25rem">
              eventList
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="eventSettings">
          <FlexContainer direction="column">
            <SVGIcon name="eventSettings" />
            <Text size="xs" mt=".25rem">
              eventSettings
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="virtualColumn">
          <FlexContainer direction="column">
            <SVGIcon name="virtualColumn" />
            <Text size="xs" mt=".25rem">
              virtualColumn
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="zoomArea">
          <FlexContainer direction="column">
            <SVGIcon name="zoomArea" />
            <Text size="xs" mt=".25rem">
              zoomArea
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="mail">
          <FlexContainer direction="column">
            <SVGIcon name="mail" />
            <Text size="xs" mt=".25rem">
              mail
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="machineSettings">
          <FlexContainer direction="column">
            <SVGIcon name="machineSettings" />
            <Text size="xs" mt=".25rem">
              machineSettings
            </Text>
          </FlexContainer>
        </CopyToClipboard>
      </FlexContainer>
      <FlexContainer justifyContent="space-evenly">
        <CopyToClipboard text="chipWithDollar">
          <FlexContainer direction="column">
            <SVGIcon name="chipWithDollar" />
            <Text size="xs" mt=".25rem">
              chipWithDollar
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="changeStatus">
          <FlexContainer direction="column">
            <SVGIcon name="changeStatus" />
            <Text size="xs" mt=".25rem">
              changeStatus
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="trendUp">
          <FlexContainer direction="column">
            <SVGIcon name="trendUp" />
            <Text size="xs" mt=".25rem">
              trendUp
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="trendDown">
          <FlexContainer direction="column">
            <SVGIcon name="trendDown" />
            <Text size="xs" mt=".25rem">
              trendDown
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="costRefresh">
          <FlexContainer direction="column">
            <SVGIcon name="costRefresh" />
            <Text size="xs" mt=".25rem">
              costRefresh
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="calendar">
          <FlexContainer direction="column">
            <SVGIcon name="calendar" />
            <Text size="xs" mt=".25rem">
              calendar
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="trendLineUp">
          <FlexContainer direction="column">
            <SVGIcon name="trendLineUp" />
            <Text size="xs" mt=".25rem">
              trendLineUp
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="trendLineDown">
          <FlexContainer direction="column">
            <SVGIcon name="trendLineDown" />
            <Text size="xs" mt=".25rem">
              trendLineDown
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="target">
          <FlexContainer direction="column">
            <SVGIcon name="target" />
            <Text size="xs" mt=".25rem">
              target
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="chartAscending">
          <FlexContainer direction="column">
            <SVGIcon name="chartAscending" />
            <Text size="xs" mt=".25rem">
              chartAscending
            </Text>
          </FlexContainer>
        </CopyToClipboard>
      </FlexContainer>
      <FlexContainer justifyContent="space-evenly">
        <CopyToClipboard text="costSetup">
          <FlexContainer direction="column">
            <SVGIcon name="costSetup" />
            <Text size="xs" mt=".25rem">
              costSetup
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="organization">
          <FlexContainer direction="column">
            <SVGIcon name="organization" />
            <Text size="xs" mt=".25rem">
              organization
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="desktop">
          <FlexContainer direction="column">
            <SVGIcon name="desktop" />
            <Text size="xs" mt=".25rem">
              desktop
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="desktopChart">
          <FlexContainer direction="column">
            <SVGIcon name="desktopChart" />
            <Text size="xs" mt=".25rem">
              desktopChart
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="discount">
          <FlexContainer direction="column">
            <SVGIcon name="discount" />
            <Text size="xs" mt=".25rem">
              discount
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="clock">
          <FlexContainer direction="column">
            <SVGIcon name="clock" />
            <Text size="xs" mt=".25rem">
              clock
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="tag">
          <FlexContainer direction="column">
            <SVGIcon name="tag" />
            <Text size="xs" mt=".25rem">
              tag
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="layers">
          <FlexContainer direction="column">
            <SVGIcon name="layers" />
            <Text size="xs" mt=".25rem">
              layers
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="chart">
          <FlexContainer direction="column">
            <SVGIcon name="chart" />
            <Text size="xs" mt=".25rem">
              chart
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="feedback">
          <FlexContainer direction="column">
            <SVGIcon name="feedback" />
            <Text size="xs" mt=".25rem">
              feedback
            </Text>
          </FlexContainer>
        </CopyToClipboard>
        <CopyToClipboard text="file">
          <FlexContainer direction="column">
            <SVGIcon name="file" />
            <Text size="xs" mt=".25rem">
              file
            </Text>
          </FlexContainer>
        </CopyToClipboard>
      </FlexContainer>
    </>
  ),

  name: "data",
};

export const Formatting: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="adjustments">
        <FlexContainer direction="column">
          <SVGIcon name="adjustments" />
          <Text size="xs" mt=".25rem">
            adjustments
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="link">
        <FlexContainer direction="column">
          <SVGIcon name="link" />
          <Text size="xs" mt=".25rem">
            link
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="brokenLink">
        <FlexContainer direction="column">
          <SVGIcon name="brokenLink" />
          <Text size="xs" mt=".25rem">
            brokenLink
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="edit">
        <FlexContainer direction="column">
          <SVGIcon name="edit" />
          <Text size="xs" mt=".25rem">
            edit
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="copy">
        <FlexContainer direction="column">
          <SVGIcon name="copy" />
          <Text size="xs" mt=".25rem">
            copy
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="trash">
        <FlexContainer direction="column">
          <SVGIcon name="trash" />
          <Text size="xs" mt=".25rem">
            trash
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="save">
        <FlexContainer direction="column">
          <SVGIcon name="save" />
          <Text size="xs" mt=".25rem">
            save
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="download">
        <FlexContainer direction="column">
          <SVGIcon name="download" />
          <Text size="xs" mt=".25rem">
            download
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="search">
        <FlexContainer direction="column">
          <SVGIcon name="search" />
          <Text size="xs" mt=".25rem">
            search
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="scan">
        <FlexContainer direction="column">
          <SVGIcon name="scan" />
          <Text size="xs" mt=".25rem">
            scan
          </Text>
        </FlexContainer>
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "formatting",
};

export const Navigation: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="arrowDown">
        <FlexContainer direction="column">
          <SVGIcon name="arrowDown" />
          <Text size="xs" mt=".25rem">
            arrowDown
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="arrowLeft">
        <FlexContainer direction="column">
          <SVGIcon name="arrowLeft" />
          <Text size="xs" mt=".25rem">
            arrowLeft
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="arrowRight">
        <FlexContainer direction="column">
          <SVGIcon name="arrowRight" />
          <Text size="xs" mt=".25rem">
            arrowRight
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="arrowUp">
        <FlexContainer direction="column">
          <SVGIcon name="arrowUp" />
          <Text size="xs" mt=".25rem">
            arrowUp
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="burgerMenu">
        <FlexContainer direction="column">
          <SVGIcon name="burgerMenu" />
          <Text size="xs" mt=".25rem">
            burgerMenu
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="chevronDown">
        <FlexContainer direction="column">
          <SVGIcon name="chevronDown" />
          <Text size="xs" mt=".25rem">
            chevronDown
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="chevronLeft">
        <FlexContainer direction="column">
          <SVGIcon name="chevronLeft" />
          <Text size="xs" mt=".25rem">
            chevronLeft
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="chevronRight">
        <FlexContainer direction="column">
          <SVGIcon name="chevronRight" />
          <Text size="xs" mt=".25rem">
            chevronRight
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="chevronUp">
        <FlexContainer direction="column">
          <SVGIcon name="chevronUp" />
          <Text size="xs" mt=".25rem">
            chevronUp
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="close">
        <FlexContainer direction="column">
          <SVGIcon name="close" />
          <Text size="xs" mt=".25rem">
            close
          </Text>
        </FlexContainer>
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "navigation",
};

export const User: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="contactPersons">
        <FlexContainer direction="column">
          <SVGIcon name="contactPersons" />
          <Text size="xs" mt=".25rem">
            contactPersons
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="userList">
        <FlexContainer direction="column">
          <SVGIcon name="userList" />
          <Text size="xs" mt=".25rem">
            userList
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="user">
        <FlexContainer direction="column">
          <SVGIcon name="user" />
          <Text size="xs" mt=".25rem">
            user
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="users">
        <FlexContainer direction="column">
          <SVGIcon name="users" />
          <Text size="xs" mt=".25rem">
            users
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="userAccess">
        <FlexContainer direction="column">
          <SVGIcon name="userAccess" />
          <Text size="xs" mt=".25rem">
            userAccess
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="userAssign">
        <FlexContainer direction="column">
          <SVGIcon name="userAssign" />
          <Text size="xs" mt=".25rem">
            userAssign
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="usersSuccess">
        <FlexContainer direction="column">
          <SVGIcon name="usersSuccess" />
          <Text size="xs" mt=".25rem">
            usersSuccess
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="emojiNormal">
        <FlexContainer direction="column">
          <SVGIcon name="emojiNormal" />
          <Text size="xs" mt=".25rem">
            emojiNormal
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="emojiHappy">
        <FlexContainer direction="column">
          <SVGIcon name="emojiHappy" />
          <Text size="xs" mt=".25rem">
            emojiHappy
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="emojiSad">
        <FlexContainer direction="column">
          <SVGIcon name="emojiSad" />
          <Text size="xs" mt=".25rem">
            emojiSad
          </Text>
        </FlexContainer>
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "user",
};

export const Status: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="inProgressFilled">
        <FlexContainer direction="column">
          <SVGIcon name="inProgressFilled" />
          <Text size="xs" mt=".25rem">
            inProgressFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="playFilled">
        <FlexContainer direction="column">
          <SVGIcon name="playFilled" />
          <Text size="xs" mt=".25rem">
            playFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="cancelFilled">
        <FlexContainer direction="column">
          <SVGIcon name="cancelFilled" />
          <Text size="xs" mt=".25rem">
            cancelFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="stopFilled">
        <FlexContainer direction="column">
          <SVGIcon name="stopFilled" />
          <Text size="xs" mt=".25rem">
            stopFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="pendingFilled">
        <FlexContainer direction="column">
          <SVGIcon name="pendingFilled" />
          <Text size="xs" mt=".25rem">
            pendingFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="pausedFilled">
        <FlexContainer direction="column">
          <SVGIcon name="pausedFilled" />
          <Text size="xs" mt=".25rem">
            pausedFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="successFilled">
        <FlexContainer direction="column">
          <SVGIcon name="successFilled" />
          <Text size="xs" mt=".25rem">
            successFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="waitingFilled">
        <FlexContainer direction="column">
          <SVGIcon name="waitingFilled" />
          <Text size="xs" mt=".25rem">
            waitingFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="warningFilled">
        <FlexContainer direction="column">
          <SVGIcon name="warningFilled" />
          <Text size="xs" mt=".25rem">
            warningFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="errorFilled">
        <FlexContainer direction="column">
          <SVGIcon name="errorFilled" />
          <Text size="xs" mt=".25rem">
            errorFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="timeOutFilled">
        <FlexContainer direction="column">
          <SVGIcon name="timeOutFilled" />
          <Text size="xs" mt=".25rem">
            timeOutFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="timeRangeFilled">
        <FlexContainer direction="column">
          <SVGIcon name="timeRangeFilled" />
          <Text size="xs" mt=".25rem">
            timeRangeFilled
          </Text>
        </FlexContainer>
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "status",
};

export const ResourceCategories: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="analytics">
        <FlexContainer direction="column">
          <SVGIcon name="analytics" />
          <Text size="xs" mt=".25rem">
            analytics
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="applicationServices">
        <FlexContainer direction="column">
          <SVGIcon name="applicationServices" />
          <Text size="xs" mt=".25rem">
            applicationServices
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="businessApplications">
        <FlexContainer direction="column">
          <SVGIcon name="businessApplications" />
          <Text size="xs" mt=".25rem">
            businessApplications
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="compute">
        <FlexContainer direction="column">
          <SVGIcon name="compute" />
          <Text size="xs" mt=".25rem">
            compute
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="containers">
        <FlexContainer direction="column">
          <SVGIcon name="containers" />
          <Text size="xs" mt=".25rem">
            containers
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="cost">
        <FlexContainer direction="column">
          <SVGIcon name="cost" />
          <Text size="xs" mt=".25rem">
            cost
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="databaseCategory">
        <FlexContainer direction="column">
          <SVGIcon name="databaseCategory" />
          <Text size="xs" mt=".25rem">
            databaseCategory
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="devTools">
        <FlexContainer direction="column">
          <SVGIcon name="devTools" />
          <Text size="xs" mt=".25rem">
            devTools
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="iot">
        <FlexContainer direction="column">
          <SVGIcon name="iot" />
          <Text size="xs" mt=".25rem">
            iot
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="machineLearning">
        <FlexContainer direction="column">
          <SVGIcon name="machineLearning" />
          <Text size="xs" mt=".25rem">
            machineLearning
          </Text>
        </FlexContainer>
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "resourceCategories",
};

export const CloudProvider: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="aws">
        <FlexContainer direction="column">
          <SVGIcon name="aws" />
          <Text size="xs" mt=".25rem">
            aws
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="awsChina">
        <FlexContainer direction="column">
          <SVGIcon name="awsChina" />
          <Text size="xs" mt=".25rem">
            awsChina
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="azure">
        <FlexContainer direction="column">
          <SVGIcon name="azure" />
          <Text size="xs" mt=".25rem">
            azure
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="gcp">
        <FlexContainer direction="column">
          <SVGIcon name="gcp" />
          <Text size="xs" mt=".25rem">
            gcp
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="ibmCloud">
        <FlexContainer direction="column">
          <SVGIcon name="ibmCloud" />
          <Text size="xs" mt=".25rem">
            ibmCloud
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="vmware">
        <FlexContainer direction="column">
          <SVGIcon name="vmware" />
          <Text size="xs" mt=".25rem">
            vmware
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="kubernetes">
        <FlexContainer direction="column">
          <SVGIcon name="kubernetes" />
          <Text size="xs" mt=".25rem">
            kubernetes
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="eks">
        <FlexContainer direction="column">
          <SVGIcon name="eks" />
          <Text size="xs" mt=".25rem">
            eks
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="aks">
        <FlexContainer direction="column">
          <SVGIcon name="aks" />
          <Text size="xs" mt=".25rem">
            aks
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="gke">
        <FlexContainer direction="column">
          <SVGIcon name="gke" />
          <Text size="xs" mt=".25rem">
            gke
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="openshift">
        <FlexContainer direction="column">
          <SVGIcon name="openshift" />
          <Text size="xs" mt=".25rem">
            openshift
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="alibaba">
        <FlexContainer direction="column">
          <SVGIcon name="alibaba" />
          <Text size="xs" mt=".25rem">
            alibaba
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="hybridCloud">
        <FlexContainer direction="column">
          <SVGIcon name="hybridCloud" />
          <Text size="xs" mt=".25rem">
            hybridCloud
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="exoscale">
        <FlexContainer direction="column">
          <SVGIcon name="exoscale" />
          <Text size="xs" mt=".25rem">
            exoscale
          </Text>
        </FlexContainer>
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "cloudProvider",
};

export const OsProvider: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="linux">
        <FlexContainer direction="column">
          <SVGIcon name="linux" />
          <Text size="xs" mt=".25rem">
            linux
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="windows">
        <FlexContainer direction="column">
          <SVGIcon name="windows" />
          <Text size="xs" mt=".25rem">
            windows
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="ubuntu">
        <FlexContainer direction="column">
          <SVGIcon name="ubuntu" />
          <Text size="xs" mt=".25rem">
            ubuntu
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="centOS">
        <FlexContainer direction="column">
          <SVGIcon name="centOS" />
          <Text size="xs" mt=".25rem">
            centOS
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="amazonLinux">
        <FlexContainer direction="column">
          <SVGIcon name="amazonLinux" />
          <Text size="xs" mt=".25rem">
            amazonLinux
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="redHat">
        <FlexContainer direction="column">
          <SVGIcon name="redHat" />
          <Text size="xs" mt=".25rem">
            redHat
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="suse">
        <FlexContainer direction="column">
          <SVGIcon name="suse" />
          <Text size="xs" mt=".25rem">
            suse
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="oracle">
        <FlexContainer direction="column">
          <SVGIcon name="oracle" />
          <Text size="xs" mt=".25rem">
            oracle
          </Text>
        </FlexContainer>
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "osProvider",
};

export const OsComponents: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="customCodeBuild">
        <FlexContainer direction="column">
          <SVGIcon name="customCodeBuild" />
          <Text size="xs" mt=".25rem">
            customCodeBuild
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="customCodeTest">
        <FlexContainer direction="column">
          <SVGIcon name="customCodeTest" />
          <Text size="xs" mt=".25rem">
            customCodeTest
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="datadog">
        <FlexContainer direction="column">
          <SVGIcon name="datadog" />
          <Text size="xs" mt=".25rem">
            datadog
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="hardening">
        <FlexContainer direction="column">
          <SVGIcon name="hardening" />
          <Text size="xs" mt=".25rem">
            hardening
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="ngnix">
        <FlexContainer direction="column">
          <SVGIcon name="ngnix" />
          <Text size="xs" mt=".25rem">
            ngnix
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="sumoLogic">
        <FlexContainer direction="column">
          <SVGIcon name="sumoLogic" />
          <Text size="xs" mt=".25rem">
            sumoLogic
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="trendMicro">
        <FlexContainer direction="column">
          <SVGIcon name="trendMicro" />
          <Text size="xs" mt=".25rem">
            trendMicro
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="awsCloudWatch">
        <FlexContainer direction="column">
          <SVGIcon name="awsCloudWatch" />
          <Text size="xs" mt=".25rem">
            awsCloudWatch
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="awsInspector">
        <FlexContainer direction="column">
          <SVGIcon name="awsInspector" />
          <Text size="xs" mt=".25rem">
            awsInspector
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="stackDrive">
        <FlexContainer direction="column">
          <SVGIcon name="stackDrive" />
          <Text size="xs" mt=".25rem">
            stackDrive
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="vmwearTools">
        <FlexContainer direction="column">
          <SVGIcon name="vmwearTools" />
          <Text size="xs" mt=".25rem">
            vmwearTools
          </Text>
        </FlexContainer>
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "osComponents",
};

export const ExternalServices: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="serviceNow">
        <FlexContainer direction="column">
          <SVGIcon name="serviceNow" />
          <Text size="xs" mt=".25rem">
            serviceNow
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="azureFunction">
        <FlexContainer direction="column">
          <SVGIcon name="azureFunction" />
          <Text size="xs" mt=".25rem">
            azureFunction
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="awsLambda">
        <FlexContainer direction="column">
          <SVGIcon name="awsLambda" />
          <Text size="xs" mt=".25rem">
            awsLambda
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="slack">
        <FlexContainer direction="column">
          <SVGIcon name="slack" />
          <Text size="xs" mt=".25rem">
            slack
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="slackColorful">
        <FlexContainer direction="column">
          <SVGIcon name="slackColorful" />
          <Text size="xs" mt=".25rem">
            slackColorful
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="pagerDuty">
        <FlexContainer direction="column">
          <SVGIcon name="pagerDuty" />
          <Text size="xs" mt=".25rem">
            pagerDuty
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="pagerDutyColorful">
        <FlexContainer direction="column">
          <SVGIcon name="pagerDutyColorful" />
          <Text size="xs" mt=".25rem">
            pagerDutyColorful
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="turbonomic">
        <FlexContainer direction="column">
          <SVGIcon name="turbonomic" />
          <Text size="xs" mt=".25rem">
            turbonomic
          </Text>
        </FlexContainer>
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "externalServices",
};

export const NcIcons: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="bulb">
        <FlexContainer direction="column">
          <SVGIcon size="xxl" name="bulb" />
          <Text size="xs" mt=".25rem">
            bulb
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="documentation">
        <FlexContainer direction="column">
          <SVGIcon size="xxl" name="documentation" />
          <Text size="xs" mt=".25rem">
            documentation
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="rocket">
        <FlexContainer direction="column">
          <SVGIcon size="xxl" name="rocket" />
          <Text size="xs" mt=".25rem">
            rocket
          </Text>
        </FlexContainer>
      </CopyToClipboard>
      <CopyToClipboard text="emptyData">
        <FlexContainer direction="column">
          <SVGIcon size="xxl" name="emptyData" />
          <Text size="xs" mt=".25rem">
            emptyData
          </Text>
        </FlexContainer>
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "ncIcons",
};

export const KlarityResources: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="externalIntegration">
        <SVGIcon name="externalIntegration" />
      </CopyToClipboard>
      <CopyToClipboard text="reservedInstance">
        <SVGIcon name="reservedInstance" />
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "klarityResources",
};

export const AwsResource: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="ec2">
        <SVGIcon name="ec2" />
      </CopyToClipboard>
      <CopyToClipboard text="dynamodb">
        <SVGIcon name="dynamodb" />
      </CopyToClipboard>
      <CopyToClipboard text="sqs">
        <SVGIcon name="sqs" />
      </CopyToClipboard>
      <CopyToClipboard text="lambda">
        <SVGIcon name="lambda" />
      </CopyToClipboard>
      <CopyToClipboard text="route53">
        <SVGIcon name="route53" />
      </CopyToClipboard>
      <CopyToClipboard text="s3">
        <SVGIcon name="s3" />
      </CopyToClipboard>
      <CopyToClipboard text="codepipeline">
        <SVGIcon name="codepipeline" />
      </CopyToClipboard>
      <CopyToClipboard text="kms">
        <SVGIcon name="kms" />
      </CopyToClipboard>
      <CopyToClipboard text="rds">
        <SVGIcon name="rds" />
      </CopyToClipboard>
      <CopyToClipboard text="ecs">
        <SVGIcon name="ecs" />
      </CopyToClipboard>
      <CopyToClipboard text="apigateway">
        <SVGIcon name="apigateway" />
      </CopyToClipboard>
      <CopyToClipboard text="ecr">
        <SVGIcon name="ecr" />
      </CopyToClipboard>
      <CopyToClipboard text="sns">
        <SVGIcon name="sns" />
      </CopyToClipboard>
      <CopyToClipboard text="redshift">
        <SVGIcon name="redshift" />
      </CopyToClipboard>
      <CopyToClipboard text="appsync">
        <SVGIcon name="appsync" />
      </CopyToClipboard>
      <CopyToClipboard text="waf">
        <SVGIcon name="waf" />
      </CopyToClipboard>
      <CopyToClipboard text="secretsmanager">
        <SVGIcon name="secretsmanager" />
      </CopyToClipboard>
      <CopyToClipboard text="amplify">
        <SVGIcon name="amplify" />
      </CopyToClipboard>
      <CopyToClipboard text="athena">
        <SVGIcon name="athena" />
      </CopyToClipboard>
      <CopyToClipboard text="autoscaling">
        <SVGIcon name="autoscaling" />
      </CopyToClipboard>
      <CopyToClipboard text="cloudfront">
        <SVGIcon name="cloudfront" />
      </CopyToClipboard>
      <CopyToClipboard text="codebuild">
        <SVGIcon name="codebuild" />
      </CopyToClipboard>
      <CopyToClipboard text="cognitoidp">
        <SVGIcon name="cognitoidp" />
      </CopyToClipboard>
      <CopyToClipboard text="datapipeline">
        <SVGIcon name="datapipeline" />
      </CopyToClipboard>
      <CopyToClipboard text="elasticache">
        <SVGIcon name="elasticache" />
      </CopyToClipboard>
      <CopyToClipboard text="elasticfilesystem">
        <SVGIcon name="elasticfilesystem" />
      </CopyToClipboard>
      <CopyToClipboard text="elasticloadbalancing">
        <SVGIcon name="elasticloadbalancing" />
      </CopyToClipboard>
      <CopyToClipboard text="elasticmapreduce">
        <SVGIcon name="elasticmapreduce" />
      </CopyToClipboard>
      <CopyToClipboard text="es">
        <SVGIcon name="es" />
      </CopyToClipboard>
      <CopyToClipboard text="firehose">
        <SVGIcon name="firehose" />
      </CopyToClipboard>
      <CopyToClipboard text="glue">
        <SVGIcon name="glue" />
      </CopyToClipboard>
      <CopyToClipboard text="iam">
        <SVGIcon name="iam" />
      </CopyToClipboard>
      <CopyToClipboard text="kinesis">
        <SVGIcon name="kinesis" />
      </CopyToClipboard>
      <CopyToClipboard text="machinelearning">
        <SVGIcon name="machinelearning" />
      </CopyToClipboard>
      <CopyToClipboard text="sagemaker">
        <SVGIcon name="sagemaker" />
      </CopyToClipboard>
      <CopyToClipboard text="securityhub">
        <SVGIcon name="securityhub" />
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "awsResource",
};

export const Menu: StoryObj = {
  render: () => (
    <FlexContainer justifyContent="space-evenly">
      <CopyToClipboard text="dashboard">
        <SVGIcon name="dashboard" />
      </CopyToClipboard>
      <CopyToClipboard text="application">
        <SVGIcon name="application" />
      </CopyToClipboard>
      <CopyToClipboard text="cloudAccounts">
        <SVGIcon name="cloudAccounts" />
      </CopyToClipboard>
      <CopyToClipboard text="organizationalStructure">
        <SVGIcon name="organizationalStructure" />
      </CopyToClipboard>
      <CopyToClipboard text="contactPersons">
        <SVGIcon name="contactPersons" />
      </CopyToClipboard>
      <CopyToClipboard text="users">
        <SVGIcon name="users" />
      </CopyToClipboard>
      <CopyToClipboard text="mappingRules">
        <SVGIcon name="mappingRules" />
      </CopyToClipboard>
      <CopyToClipboard text="costSplittingRules">
        <SVGIcon name="costSplittingRules" />
      </CopyToClipboard>
      <CopyToClipboard text="actionLog">
        <SVGIcon name="actionLog" />
      </CopyToClipboard>
      <CopyToClipboard text="businessUnitType">
        <SVGIcon name="businessUnitType" />
      </CopyToClipboard>
      <CopyToClipboard text="costAnalysis">
        <SVGIcon name="costAnalysis" />
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "menu",
};

export const Ui: StoryObj = {
  render: () => (
    <FlexContainer
      justifyContent="space-evenly"
      style={{
        flexWrap: "wrap",
      }}
    >
      <CopyToClipboard text="networking">
        <SVGIcon name="networking" />
      </CopyToClipboard>
      <CopyToClipboard text="support">
        <SVGIcon name="support" />
      </CopyToClipboard>
      <CopyToClipboard text="other">
        <SVGIcon name="other" />
      </CopyToClipboard>
      <CopyToClipboard text="forecastUp">
        <SVGIcon name="forecastUp" />
      </CopyToClipboard>
      <CopyToClipboard text="forecastDown">
        <SVGIcon name="forecastDown" />
      </CopyToClipboard>
      <CopyToClipboard text="down">
        <SVGIcon name="down" />
      </CopyToClipboard>
      <CopyToClipboard text="cloudError">
        <SVGIcon name="cloudError" />
      </CopyToClipboard>
      <CopyToClipboard text="cloudSuccess">
        <SVGIcon name="cloudSuccess" />
      </CopyToClipboard>
      <CopyToClipboard text="gear">
        <SVGIcon name="gear" />
      </CopyToClipboard>
      <CopyToClipboard text="spinningGear">
        <SVGIcon name="spinningGear" />
      </CopyToClipboard>
    </FlexContainer>
  ),

  name: "ui",
};
