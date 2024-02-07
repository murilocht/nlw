import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export function Loading() {
	return (
		<View className="flex-1 justify-center bg-slate-900 items-center">
			<ActivityIndicator color={colors.white} />
		</View>
	);
}