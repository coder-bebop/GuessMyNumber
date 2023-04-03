import { useEffect, useState } from "react";
import { View } from "react-native";

// this component tries to recreate CSS's 'text-shadow' property
// to achieve something like this: https://codepen.io/ykadosh/pen/zYNxVKr

// it does not work as of now (30-Mar-2023)
export default function Shadow({ coreObject, layers }) {
    const [component, setComponent] = useState(coreObject);

    useEffect(() => {
        layers.forEach(props => {
            setComponent(coreComponent => {
                return (
                    <View style={{
                        shadowColor: props.color,
                        shadowOffset: { width: props.width, height: props.height },
                        shadowRadius: props.radius,
                    }}>
                        {coreComponent}
                    </View>
                );
            });
        });
    }, []);

    return component;
}