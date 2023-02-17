function router(handle, pathname) {
    if (typeof handle[pathname] == "function") {
        return handle[pathname]();
    } else {
        return pathname + " is not define";
    }
}

exports.router = router;