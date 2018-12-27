const process = require('process')
const iosCaps = {
    platformName: "iOS",
    automationName: "XCUITest",
    deviceName: process.env.IOS_DEVICE_NAME || "iPhone 6s",
    platformVersion: process.env.IOS_PLATFORM_VERSION || "11.1",
    app: undefined
};

const iosWebCaps = {
    platformName: "iOS",
    automationName: "XCUITest",
    deviceName: process.env.IOS_DEVICE_NAME || "iPhone 6s",
    platformVersion: process.env.IOS_PLATFORM_VERSION || "11.1",
    browserName: "Safari"
};

const DEFAULT_ANDROID_DEVICE_NAME =  "emulator-5554";
const DEFAULT_ANDROID_PLATFORM_VERSION = 5.1;

const androidCaps = {
    platformName: "Android",
    automationName: "UiAutomator2",
    deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
    platformVersion:
    process.env.ANDROID_PLATFORM_VERSION || DEFAULT_ANDROID_PLATFORM_VERSION,
    app: undefined // Will be added in tests
};

const androidWebCaps = {
    platformName: "Android",
    automationName: "UiAutomator2",
    deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
    platformVersion:
    process.env.ANDROID_PLATFORM_VERSION || DEFAULT_ANDROID_PLATFORM_VERSION,
    browserName: "chrome"
};

const serverConfig = {
    host: process.env.APPIUM_HOST || "localhost",
    port: process.env.APPIUM_PORT || 4723,
    logLevel: "verbose"
};

const androidOptions = Object.assign(
    {
        desiredCapabilities: androidCaps
    },
    serverConfig
);

const iosOptions = Object.assign(
    {
        desiredCapabilities: iosCaps
    },
    serverConfig
);

const androidWebOptions = Object.assign(
    {
        desiredCapabilities: androidWebCaps
    },
    serverConfig
);

const iosWebOptions = Object.assign(
    {
        desiredCapabilities: iosWebCaps
    },
    serverConfig
);

module.exports = {
    androidOptions,
    iosOptions,
    androidWebOptions,
    iosWebOptions
};