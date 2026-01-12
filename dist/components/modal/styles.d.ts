import theme from "../../theme";
import { Box } from "../box";
import { Heading } from "../heading";
import { ModalBoxProps, ModalContentProps, StyledModalProps } from "./types";
export declare const StyledModal: import("styled-components").StyledComponent<"div", any, StyledModalProps, never>;
export declare const ModalBox: import("styled-components").StyledComponent<typeof Box, any, ModalBoxProps, never>;
export declare const ModalAction: import("styled-components").StyledComponent<(<C extends import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> = "button">(props: Omit<import("react").PropsWithoutRef<import("react").ComponentProps<C>>, "form" | "select" | "className" | "color" | "onClick" | "as" | "severity" | "status" | "size" | "icon" | "iconRight" | "initialState" | "linkTo" | "display" | "outline" | "secondary"> & {
    as?: C | undefined;
} & {
    severity?: "medium" | "high" | "low" | undefined;
    status?: "success" | "danger" | "warning" | "notification" | "accent" | "discovery" | undefined;
    size?: "sm" | "md" | undefined;
    icon?: "link" | "menu" | "search" | "filter" | "default" | "compare" | "resource" | "security" | "sort" | "keys" | "success" | "danger" | "warning" | "serviceNow" | "awsLambda" | "azureFunction" | "slack" | "slackColorful" | "pagerDuty" | "pagerDutyColorful" | "turbonomic" | "analytics" | "applicationServices" | "businessApplications" | "compute" | "containers" | "cost" | "databaseCategory" | "devTools" | "iot" | "machineLearning" | "management" | "migration" | "network" | "other" | "webServices" | "benefit" | "bulb" | "documentation" | "rocket" | "emptyData" | "lmNeedsOptimization" | "lmPartiallyOptimized" | "lmModerateOptimization" | "lmFullyOptimized" | "dmNeedsOptimization" | "dmPartiallyOptimized" | "dmModerateOptimization" | "dmFullyOptimized" | "customCodeBuild" | "customCodeTest" | "datadog" | "hardening" | "ngnix" | "sumoLogic" | "trendMicro" | "awsCloudWatch" | "awsInspector" | "stackDrive" | "vmwearTools" | "linux" | "windows" | "ubuntu" | "centOS" | "amazonLinux" | "redHat" | "suse" | "oracle" | "rocky" | "debian" | "budget" | "budgetEuro" | "forecastUp" | "forecastDown" | "down" | "cloudError" | "cloudSuccess" | "gear" | "spinningGear" | "dollar" | "euro" | "adjustments" | "dashboard" | "settings" | "settingsRed" | "archive" | "cloud" | "cloudOffline" | "cloudWithDollar" | "cloudOnline" | "addCloud" | "cloudQuestionMark" | "cloudSettings" | "upload" | "costs" | "costSetup" | "feedback" | "organization" | "equal" | "proportional" | "report" | "chartAscending" | "chartDescending" | "cloudWaste" | "co2" | "co2Down" | "co2Up" | "change" | "virtualHost" | "smartphone" | "cars" | "checkList" | "api" | "application" | "copy" | "database" | "detailsView" | "listView" | "wizardView" | "brokenLink" | "edit" | "trash" | "briefcase" | "arrowDown" | "arrowLeft" | "arrowRight" | "arrowUp" | "chevronDown" | "chevronLeft" | "chevronRight" | "chevronUp" | "close" | "doubleChevronLeft" | "doubleChevronRight" | "dragAndDrop" | "externalLink" | "firstPage" | "lastPage" | "minus" | "plus" | "sidebar" | "slash" | "sortDown" | "sortUp" | "expand" | "collapse" | "caretDown" | "caretUp" | "star" | "starFilled" | "sparkles" | "burgerMenu" | "exchange" | "filterMenu" | "filterSelect" | "filterClear" | "logout" | "mappingRules" | "production" | "qa" | "recalculate" | "save" | "scan" | "sortAscending" | "sortDescending" | "sortInactive" | "test" | "moon" | "sun" | "eye" | "eyeClose" | "download" | "send" | "flowchart" | "cancel" | "play" | "pause" | "thunder" | "statusError" | "statusErrorDetailed" | "statusSuccess" | "statusSuccessDetailed" | "statusRunning" | "statusWarning" | "statusInProgress" | "statusOnHold" | "helpCenter" | "help" | "info" | "infoFilled" | "countdown" | "export" | "mailInformation" | "otherType" | "integration" | "reservedInstances" | "storage" | "bell" | "bellActive" | "bellActiveRed" | "bellSettings" | "contactPersons" | "userList" | "user" | "users" | "userAccess" | "userAssign" | "usersSuccess" | "eventSchedule" | "eventList" | "eventLog" | "virtualColumn" | "zoomArea" | "mail" | "machineSettings" | "emojiNormal" | "emojiHappy" | "emojiSad" | "padlock" | "chipWithDollar" | "changeStatus" | "trendUp" | "trendDown" | "costRefresh" | "checkmark" | "checkmarkDouble" | "calendar" | "trendLineUp" | "trendLineDown" | "target" | "refreshSuccess" | "refreshWarning" | "refresh" | "costSettings" | "playFilled" | "cancelFilled" | "stopFilled" | "pendingFilled" | "pausedFilled" | "successFilled" | "successManualFilled" | "waitingFilled" | "warningFilled" | "inProgressFilled" | "errorFilled" | "timeOutFilled" | "timeRangeFilled" | "desktop" | "desktopChart" | "docSearch" | "discount" | "doubleGear" | "cloudDataOnly" | "clock" | "tag" | "layers" | "chart" | "eventSettings" | "file" | "cloudAccounts" | "organizationalStructure" | "costSplittingRules" | "actionLog" | "businessUnitType" | "costAnalysis" | "networking" | "support" | "reservedInstance" | "externalIntegration" | "aws" | "awsChina" | "azure" | "gcp" | "vmware" | "kubernetes" | "openshift" | "hybridCloud" | "ibmCloud" | "eks" | "aks" | "gke" | "alibaba" | "exoscale" | "ec2" | "dynamodb" | "sqs" | "lambda" | "route53" | "s3" | "codepipeline" | "kms" | "rds" | "ecs" | "apigateway" | "ecr" | "sns" | "redshift" | "appsync" | "waf" | "secretsmanager" | "amplify" | "athena" | "autoscaling" | "cloudfront" | "codebuild" | "cognitoidp" | "datapipeline" | "elasticache" | "elasticfilesystem" | "elasticloadbalancing" | "elasticmapreduce" | "es" | "firehose" | "glue" | "iam" | "kinesis" | "machinelearning" | "sagemaker" | "securityhub" | undefined;
    iconRight?: boolean | undefined;
    initialState?: string | undefined;
    color?: (string & {}) | import("../../theme/config").SingleColors | undefined;
    form?: string | undefined;
    select?: boolean | undefined;
    className?: string | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    linkTo?: string | undefined;
    display?: "flex" | "inline-flex" | undefined;
    outline?: boolean | undefined;
    secondary?: boolean | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    ref?: import("../button/typeUtils").PolymorphicRef<C> | undefined;
} & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null), any, {}, never>;
export declare const ModalActions: import("styled-components").StyledComponent<"div", any, {}, never>;
type BackgroundProps = {
    isVisible?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    zIndex?: keyof typeof theme.zindex;
};
export declare const Background: import("styled-components").StyledComponent<"div", any, BackgroundProps, never>;
export declare const ModalContent: import("styled-components").StyledComponent<"div", any, ModalContentProps, never>;
export declare const ModalHeading: import("styled-components").StyledComponent<typeof Heading, any, {}, never>;
export declare const ModalHeader: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
