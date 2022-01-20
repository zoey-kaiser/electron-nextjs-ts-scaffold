import {FC} from "react";

type SetNameFunction = (newName) => void;

interface DefaultComponentProps {
    name: string,
    setName: SetNameFunction
}

const DefaultComponent: FC<DefaultComponentProps> = ({name, setName}) => {
    return (
        <div className="mx-auto mt-20 text-center">
            <h1 className="text-2xl font-bold">
                Hi {name} There is nothing here yet!
            </h1>
            <div className="mt-10">
                <input
                    onChange={(el) => setName(el.target.value)}
                    className="py-1 px-3 rounded border-2 border-black"
                    placeholder="Your name..."
                    type="text"
                />
            </div>
        </div>
    )
}

export default DefaultComponent
