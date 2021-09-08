export const sortData = (data) => {
    const sortedData = [...data]

    sortedData.sort(function (a,b) {
        return  b.cases - a.cases
    })

    return sortedData
}