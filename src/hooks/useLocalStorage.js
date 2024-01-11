import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [searchedTodos, setSearchedTodos] = React.useState([]);
    React.useEffect(() => {
        setTimeout(() => {
            try {
                let localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(
                    localStorageItem
                    );
                    setItem(parsedItem);
                    setSearchedTodos(parsedItem);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 5000);
    }, []);


    const saveItem = (newItem) => {
        localStorage.setItem(
            itemName,
            JSON.stringify(newItem)
        );
        setItem(newItem)
    };

    return {
        item,
        saveItem,
        loading,
        error,
        searchedTodos,
        setSearchedTodos
    };
}

export { useLocalStorage };