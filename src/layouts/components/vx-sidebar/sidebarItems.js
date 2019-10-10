/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: null,
    name: "Dashboard",
    slug: "dashboard",
    tag: "2",
    tagColor: "warning",
    icon: "HomeIcon",
    i18n: "Dashboard",
    submenu: [
      {
        url: '/dashboard/analytics',
        name: "Analytics",
        slug: "dashboardAnalytics",
        i18n: "Analytics",
      },
      {
        url: '/dashboard/ecommerce',
        name: "eCommerce",
        slug: "dashboardECommerce",
        i18n: "eCommerce",
      },
    ]
  },
  {
    header: "Apps",
    i18n: "Apps",
  },
  {
    url: "/apps/email",
    name: "Email",
    slug: "email",
    icon: "MailIcon",
    i18n: "Email",
  },
  {
    url: "/apps/chat",
    name: "Chat",
    slug: "chat",
    icon: "MessageSquareIcon",
    i18n: "Chat",
  },
  {
    url: "/apps/todo",
    name: "Todo",
    slug: "todo",
    icon: "CheckSquareIcon",
    i18n: "Todo",
  },
  {
    url: "/apps/calendar/vue-simple-calendar",
    // url: null,
    name: "Calendar",
    slug: "calendar",
    icon: "CalendarIcon",
    tag: "new",
    tagColor: "success",
    i18n: "Calendar",
    // submenu: [
    //   {
    //     url: '/apps/calendar/vue-simple-calendar',
    //     name: "Simple Calendar",
    //     slug: "calendarSimpleCalendar",
    //     i18n: "SimpleCalendar",
    //   },
    //   {
    //     url: '/apps/calendar/vue-fullcalendar',
    //     name: "Full Calendar",
    //     slug: "calendarFullCalendar",
    //     i18n: "FullCalendar",
    //   }
    // ]
  },
  {
    url: null,
    name: "eCommerce",
    slug: "eCommerce",
    icon: "ShoppingCartIcon",
    i18n: "eCommerce",
    submenu: [
      {
        url: '/apps/eCommerce/shop',
        name: "Shop",
        slug: "eCommerceShop",
        i18n: "Shop",
      },
      {
          url: '/apps/eCommerce/wish-list',
          name: "Wish List",
          slug: "eCommerceWishList",
          i18n: "WishList",
      },
      {
        url: '/apps/eCommerce/checkout',
        name: "Checkout",
        slug: "eCommerceCheckout",
        i18n: "Checkout",
      },
    ]
  },
  {
    header: "UI Elements",
    i18n: "UIElements",
  },
  {
    url: null,
    name: "Data List",
    slug: "dataList",
    tag: "new",
    tagColor: "primary",
    icon: "ListIcon",
    i18n: "DataList",
    submenu: [
      {
        url: '/ui-elements/data-list/list-view',
        name: "List View",
        slug: "dataListListView",
        i18n: "ListView",
      },
      {
        url: '/ui-elements/data-list/thumb-view',
        name: "Thumb View",
        slug: "dataListThumbView",
        i18n: "ThumbView",
      },
    ]
  },
  {
    url: null,
    name: "Grid",
    slug: "grid",
    icon: "LayoutIcon",
    i18n: "Grid",
    submenu: [
      {
        url: '/ui-elements/grid/vuesax',
        name: "Vuesax",
        slug: "gridVuesax",
        i18n: "Vuesax",
      },
      {
        url: '/ui-elements/grid/tailwind',
        name: "Tailwind",
        slug: "gridTailwind",
        i18n: "Tailwind",
      },
    ]
  },
  {
    url: "/ui-elements/colors",
    name: "Colors",
    slug: "colors",
    icon: "DropletIcon",
    i18n: "Colors",
  },
  {
    url: null,
    name: "Card",
    slug: "card",
    icon: "CreditCardIcon",
    i18n: "Card",
    submenu: [
      {
        url: '/ui-elements/card/basic',
        name: "Basic",
        slug: "basicCards",
        i18n: "Basic",
      },
      {
        url: '/ui-elements/card/statistics',
        name: "Statistics",
        slug: "statisticsCards",
        i18n: "Statistics",
      },
      {
        url: '/ui-elements/card/analytics',
        name: "Analytics",
        slug: "analyticsCards",
        i18n: "Analytics",
      },
      {
        url: '/ui-elements/card/card-actions',
        name: "Card Actions",
        slug: "cardActions",
        i18n: "CardActions",
      },
      {
        url: '/ui-elements/card/card-colors',
        name: "Card Colors",
        slug: "cardColors",
        i18n: "CardColors",
      }
    ]
  },
  {
    url: null,
    name: "Components",
    icon: "ArchiveIcon",
    slug: 'components',
    i18n: "Components",
    submenu: [
      {
        url: '/components/alert',
        name: "Alert",
        slug: "componentAlert",
        i18n: "Alert",
      },
      {
        url: '/components/avatar',
        name: "Avatar",
        slug: "componentAvatar",
        i18n: "Avatar",
      },
      {
        url: '/components/breadcrumb',
        name: "Breadcrumb",
        slug: "componentBreadcrumb",
        i18n: "Breadcrumb",
      },
      {
        url: '/components/button',
        name: "Button",
        slug: "componentButton",
        i18n: "Button",
      },
      {
        url: '/components/button-group',
        name: "Button Group",
        slug: "componentButtonGroup",
        i18n: "ButtonGroup",
      },
      {
        url: '/components/chip',
        name: "Chip",
        slug: "componentChip",
        i18n: "Chip",
      },
      {
        url: '/components/collapse',
        name: "Collapse",
        slug: "componentCollapse",
        i18n: "Collapse",
      },
      {
        url: '/components/dialogs',
        name: "Dialogs",
        slug: "componentDialog",
        i18n: "Dialogs",
      },
      {
        url: '/components/divider',
        name: "Divider",
        slug: "componentDivider",
        i18n: "Divider",
      },
      {
        url: '/components/dropdown',
        name: "DropDown",
        slug: "componentDropDown",
        i18n: "DropDown",
      },
      {
        url: '/components/list',
        name: "List",
        slug: "componentList",
        i18n: "List",
      },
      {
        url: '/components/loading',
        name: "Loading",
        slug: "componentLoading",
        i18n: "Loading",
      },
      {
        url: '/components/navbar',
        name: "Navbar",
        slug: "componentNavbar",
        i18n: "Navbar",
      },
      {
        url: '/components/notifications',
        name: "Notifications",
        slug: "componentNotifications",
        i18n: "Notifications",
      },
      {
        url: '/components/pagination',
        name: "Pagination",
        slug: "componentPagination",
        i18n: "Pagination",
      },
      {
        url: '/components/popup',
        name: "Popup",
        slug: "componentPopup",
        i18n: "Popup",
      },
      {
        url: '/components/progress',
        name: "Progress",
        slug: "componentProgress",
        i18n: "Progress",
      },
      {
        url: '/components/sidebar',
        name: "Sidebar",
        slug: "componentSidebar",
        i18n: "Sidebar",
      },
      {
        url: '/components/slider',
        name: "Slider",
        slug: "componentSlider",
        i18n: "Slider",
      },
      {
        url: '/components/tabs',
        name: "Tabs",
        slug: "componentTabs",
        i18n: "Tabs",
      },
      {
        url: '/components/tooltip',
        name: "Tooltip",
        slug: "componentTooltip",
        i18n: "Tooltip",
      },
      {
        url: '/components/upload',
        name: "Upload",
        slug: "componentUpload",
        i18n: "Upload",
      },
    ]
  },
  {
    header: "Forms & Table",
    i18n: "FormsAndTable",
  },
  {
    url: null,
    name: "Form Elements",
    icon: "CopyIcon",
    i18n: "FormElements",
    submenu: [
      // {
      //  url: '/forms/form-elements/select',
      //  name: "Select",
      //  slug: "formElementSelect",
      //  i18n: "Select",
      // },
      {
        url: '/forms/form-elements/switch',
        name: "Switch",
        slug: "formElementSwitch",
        i18n: "Switch",
      },
      {
        url: '/forms/form-elements/checkbox',
        name: "Checkbox",
        slug: "formElementCheckbox",
        i18n: "Checkbox",
      },
      {
        url: '/forms/form-elements/radio',
        name: "Radio",
        slug: "formElementRadio",
        i18n: "Radio",
      },
      {
        url: '/forms/form-elements/input',
        name: "Input",
        slug: "formElementInput",
        i18n: "Input",
      },
      {
        url: '/forms/form-elements/number-input',
        name: "Number Input",
        slug: "formElementNumberInput",
        i18n: "NumberInput",
      },
      {
        url: '/forms/form-elements/textarea',
        name: "Textarea",
        slug: "formElementTextarea",
        i18n: "Textarea",
      },
    ]
  },
  {
    url: '/forms/form-layouts',
    name: "Form Layouts",
    icon: "PackageIcon",
    slug: "formsFormLayouts",
    i18n: "FormLayouts",
  },
  {
    url: '/forms/form-wizard',
    name: "Form Wizard",
    icon: "PackageIcon",
    slug: "extraComponentFormWizard",
    i18n: "FormWizard",
  },
  {
    url: '/forms/form-validation',
    name: "Form Validation",
    icon: "CheckCircleIcon",
    slug: "extraComponentFormValidation",
    i18n: "FormValidation",
  },
  {
    url: '/forms/form-input-group',
    name: "Form Input Group",
    icon: "MenuIcon",
    slug: "extraComponentFormInputGroup",
    i18n: "FormInputGroup",
  },
  {
    url: "/ui-elements/table",
    name: "Table",
    slug: "table",
    icon: "GridIcon",
    i18n: "Table",
  },
  {
    url: "/ui-elements/ag-grid-table",
    name: "agGrid Table",
    slug: "ag-grid-table",
    tag: "new",
    tagColor: "primary",
    icon: "GridIcon",
    i18n: "agGridTable",
  },
  {
    header: "Pages",
    i18n: "Pages",
  },
  {
    url: '/pages/profile',
    name: "Profile",
    icon: "UserIcon",
    i18n: "Profile",
  },
  {
    url: '/pages/faq',
    name: "FAQ",
    icon: "HelpCircleIcon",
    i18n: "FAQ",
  },
  {
    url: '/pages/knowledge-base',
    name: "Knowledge Base",
    icon: "InfoIcon",
    i18n: "KnowledgeBase",
  },
  {
    url: '/pages/search',
    name: "Search",
    icon: "SearchIcon",
    i18n: "Search",
  },
  {
    url: '/pages/invoice',
    name: "Invoice",
    icon: "InfoIcon",
    i18n: "Invoice",
  },
  {
    url: null,
    name: "Authentication",
    icon: "PieChartIcon",
    i18n: "Authentication",
    submenu: [
      {
        url: '/pages/login',
        name: "Login",
        slug: "pagesLogin",
        i18n: "Login",
        target: '_blank',
      },
      {
        url: '/pages/register',
        name: "Register",
        slug: "pagesRegister",
        i18n: "Register",
        target: '_blank',
      },
      {
        url: '/pages/forgot-password',
        name: "Forgot Password",
        slug: "pagesForgotPassword",
        i18n: "ForgotPassword",
        target: '_blank',
      },
      {
        url: '/pages/reset-password',
        name: "Reset Password",
        slug: "pagesResetPassword",
        i18n: "ResetPassword",
        target: '_blank',
      },
      {
        url: '/pages/lock-screen',
        name: "Lock Screen",
        slug: "pagesLockScreen",
        i18n: "LockScreen",
        target: '_blank',
      },
    ]
  },
  {
    url: null,
    name: "Miscellaneous",
    icon: "CoffeeIcon",
    i18n: "Miscellaneous",
    submenu: [
        {
          url: '/pages/not-authorized',
          name: "Not Authorized",
          slug: "pageNotAuthorized",
          icon: "XCircleIcon",
          i18n: "NotAuthorized",
          target: '_blank',
        },
        {
          url: '/pages/maintenance',
          name: "Maintenance",
          slug: "pageMaintenance",
          icon: "AnchorIcon",
          i18n: "Maintenance",
          target: '_blank',
        },
        {
          url: '/pages/comingsoon',
          name: "Coming Soon",
          icon: "ClockIcon",
          i18n: "ComingSoon",
          target: '_blank',
        },
        {
          url: '/pages/error-404',
          name: "404",
          slug: "pageError404",
          i18n: "404",
          target: '_blank',
        },
        {
          url: '/pages/error-500',
          name: "500",
          slug: "pageError500",
          i18n: "500",
          target: '_blank',
        }
    ]
  },
  {
    header: "Charts & Maps",
    i18n: "ChartsAndMaps",
  },
  {
    url: null,
    name: "Charts",
    icon: "PieChartIcon",
    tag: '3',
    tagColor: 'success',
    i18n: "Charts",
    submenu: [
      {
        url: '/charts-and-maps/charts/apex-charts',
        name: "Apex Charts",
        slug: "extraComponentChartsApexCharts",
        i18n: "ApexCharts",
      },
      {
        url: '/charts-and-maps/charts/chartjs',
        name: "chartjs",
        slug: "extraComponentChartsChartjs",
        i18n: "chartjs",
      },
      {
        url: '/charts-and-maps/charts/echarts',
        name: "echarts",
        slug: "extraComponentChartsEcharts",
        i18n: "echarts",
      },
    ]
  },
  {
    url: '/charts-and-maps/maps/google-map',
    name: "Google Map",
    icon: "MapIcon",
    slug: "extraComponentMapsGoogleMap",
    i18n: "GoogleMap",
  },
  {
    header: "Extensions",
    i18n: "Extensions",
  },
  {
    url: '/extensions/select',
    name: "Select",
    icon: "PocketIcon",
    slug: "extraComponentSelect",
    i18n: "Select",
  },
  {
    url: '/extensions/quill-editor',
    name: "Quill Editor",
    icon: "EditIcon",
    slug: "extraComponentQuillEditor",
    i18n: "QuillEditor",
  },
  {
    url: '/extensions/drag-and-drop',
    name: "Drag & Drop",
    icon: "DropletIcon",
    slug: "extraComponentDragAndDrop",
    i18n: "DragAndDrop",
  },
  {
    url: '/extensions/datepicker',
    name: "Datepicker",
    icon: "CalendarIcon",
    slug: "extraComponentDatepicker",
    i18n: "Datepicker",
  },
  {
    url: '/extensions/datetime-picker',
    name: "Datetime Picker",
    icon: "ClockIcon",
    slug: "extraComponentDatetimePicker",
    i18n: "DatetimePicker",
  },
  {
    url: null,
    name: 'Access Control',
    icon: 'LockIcon',
    i18n: 'AccessControl',
    submenu: [
      {
        url: '/extensions/access-control-editor',
        name: "Editor View",
        slug: "extraComponentAccessControlEditor",
        i18n: "EditorView",
      },
      {
        url: '/extensions/access-control-admin',
        name: "Admin View",
        slug: "extraComponentAccessControlAdmin",
        i18n: "AdminView",
      },
    ]
  },
  {
    url: '/extensions/i18n',
    name: "I18n",
    icon: "GlobeIcon",
    slug: "extraComponentI18n",
    i18n: "I18n",
  },
  {
    url: '/extensions/carousel',
    name: "Carousel",
    icon: "LayersIcon",
    slug: "extraComponentCarousel",
    i18n: "Carousel",
  },
  {
    url: '/extensions/clipboard',
    name: "Clipboard",
    icon: "CopyIcon",
    slug: "extraComponentClipboard",
    i18n: "Clipboard",
  },
  {
    url: '/extensions/context-menu',
    name: "Context Menu",
    icon: "MoreHorizontalIcon",
    slug: "extraComponentContextMenu",
    i18n: "ContextMenu",
  },
  {
    url: '/extensions/star-ratings',
    name: "Star Ratings",
    icon: "StarIcon",
    slug: "extraComponentStarRatings",
    i18n: "StarRatings",
  },
  {
    url: '/extensions/autocomplete',
    name: "Autocomplete",
    icon: "Edit3Icon",
    slug: "extraComponentAutocomplete",
    i18n: "Autocomplete",
  },
  {
    url: '/extensions/tree',
    name: "Tree",
    icon: "GitPullRequestIcon",
    slug: "extraComponentTree",
    i18n: "Tree",
  },
  {
    header: "Others",
    i18n: "Others",
  },
  {
    url: null,
    name: "Menu Levels",
    icon: "MenuIcon",
    i18n: "MenuLevels",
    submenu: [
      {
        url: null,
        name: "Menu Level 2.1",
        i18n: "MenuLevel2p1",
      },
      {
        url: null,
        name: "Menu Level 2.2",
        i18n: "MenuLevel2p2",
        submenu: [
          {
            url: null,
            name: "Menu Level 3.1",
            i18n: "MenuLevel3p1",
          },
          {
            url: null,
            name: "Menu Level 3.2",
            i18n: "MenuLevel3p2",
          },
        ]
      },
    ]
  },
  {
    url: null,
    name: "Disabled Menu",
    icon: "EyeOffIcon",
    i18n: "DisabledMenu",
    isDisabled: true,
  },

  {
    header: "Support",
    i18n: "Support",
  },
  {
    url: 'https://pixinvent.com/demo/vuesax-vuejs-admin-dashboard-template/documentation/',
    name: "Documentation",
    icon: "BookOpenIcon",
    slug: "external",
    i18n: "Documentation",
    target: "_blank"
  },
  {
    url: 'https://pixinvent.ticksy.com/',
    name: "Raise Support",
    icon: "LifeBuoyIcon",
    slug: "external",
    i18n: "RaiseSupport",
    target: "_blank"
  },
]
