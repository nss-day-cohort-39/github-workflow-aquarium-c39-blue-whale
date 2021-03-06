const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
            const dialogElement = theEvent.target.parentNode
            dialogElement.close()
        }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

    // Show Betty's details when the button is clicked
    document.querySelector("#button--betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--betty")
            theDialog.showModal()
        }
    )

    // Show Nemo's details when the button is clicked
    document.querySelector("#button--nemo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--nemo")
            theDialog.showModal()
        }
    )

    // Show Dory's details when the button is clicked
    document.querySelector("#button--dory").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dory")
            theDialog.showModal()
        }
    )
    // Mark's fish details 
    document.querySelector("#button--eddie").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--eddie")
            theDialog.showModal()
        }
    )

    // Show Ralph's details when the button is clicked
    document.querySelector("#button--ralph").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--ralph")
            theDialog.showModal()
        }
    )

    // THIS IS TIMS fish francois
    // Show Francois details when the button is clicked
    document.querySelector("#button--blueGill").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--blueGill")
            theDialog.showModal()
        }
    )
    // Show Sammy's details when the button is clicked - JD
    document.querySelector("#button--sammy").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--sammy")
            theDialog.showModal()
        }
    )
}

export default initializeDetailButtonEvents