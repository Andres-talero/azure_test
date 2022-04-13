const module = {
    getStorageAccountName: () => {
        const match = /AccountName=(.*?);/.exec(process.env.AZURE_STORAGE_ACCOUNT);
        return match[1];
    }
}

export default module;