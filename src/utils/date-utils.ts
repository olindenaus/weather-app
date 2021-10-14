export const formatDate = (date: Date, locales: string = "pl-PL") => {
    return date.toLocaleString(locales)
}

export const formatTime = (date: Date, locales: string = "pl-PL") => {
    return date.toLocaleTimeString(locales);
}

export const toTime = (timestamp: number, locales: string = "pl-PL") => {
    return toDateTime(timestamp).toLocaleTimeString(locales);
}

function toDateTime(seconds: number) {
    var t = new Date(1970, 0, 1);
    t.setSeconds(seconds);
    return t;
}