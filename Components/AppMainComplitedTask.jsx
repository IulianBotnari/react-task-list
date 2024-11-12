export default function AppMainComplitedTask() {

    //logic here
    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed"
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed"
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed"
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed"
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog"
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress"
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog"
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress"
        }
    ];


    const tasksCompleted = tasks.filter(task => {
        return task.state === "completed"
    })

    console.log(tasksCompleted);
    const returnIndex = tasksCompleted.length




    //markup here

    return (
        <>
            <section>
                <h3>Completed Task ({returnIndex})</h3>
                <div>


                    {tasksCompleted.map(task =>
                        <div className="d_flex">
                            <ul>

                                <li><h5>{task.title}</h5></li>
                                <li>Priority: {task.priority}</li>
                                <li>Est.time: {task.estimatedTime}</li>


                            </ul>
                            <div><div className="badge">{task.state}</div></div>

                        </div>

                    )}
                </div>

            </section>
            <hr />


        </>


    )


}