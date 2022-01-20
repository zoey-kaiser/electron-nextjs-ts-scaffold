import {observer} from "mobx-react-lite";
import DefaultComponent from "../components/DefaultComponent";
import DefaultLayout from "../layouts/DefaultLayout";

import nameStore from "../stores/NameStore";

const IndexPage = observer(() => {

    return (
        <DefaultLayout>
            <DefaultComponent name={nameStore.name} setName={nameStore.setName} />
        </DefaultLayout>
    )
})

export default IndexPage
