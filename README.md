Here's a professional `README.md` file for your React Native Expo project:

    ```markdown
# 📱 React Native Expo App - Modern Mobile Application

A feature-rich, production-ready mobile application built with **React Native** and **Expo**. Features paginated lists, context API state management, tab navigation, animations, and cross-platform support (iOS, Android, Web).

## ✨ Features

- 📄 **Paginated List** – Infinite scrolling with JSONPlaceholder API
- 🧠 **Context API** – Global state management with AppContext
- 🗂️ **Tab Navigation** – Bottom tabs with smooth transitions
- 🎨 **Dark/Light Mode** – Automatic theme switching with system preference
- 🔄 **Animations** – Reanimated-powered animations (waving hand, parallax)
- 📱 **Cross-Platform** – Works on iOS, Android, and Web
- 🔍 **TypeScript** – Fully typed for better developer experience
- 🎯 **File-based Routing** – Expo Router for intuitive navigation

## 🏗️ Architecture

The project follows **feature-based** organization with Expo Router:

```
app/
├── (tabs)/                      # Tab navigation group
│   ├── _layout.tsx              # Tab layout configuration
│   ├── index.tsx                # Home screen (paginated list)
│   └── explore.tsx              # Explore screen (documentation)
├── context/
│   └── AppContext.tsx           # Global state management
├── _layout.tsx                  # Root layout with Stack navigator
├── modal.tsx                    # Modal screen
└── +not-found.tsx               # 404 screen

components/                      # Reusable components
├── ui/                          # UI components
├── external-link.tsx            # External link component
├── haptic-tab.tsx               # Haptic feedback tab button
├── parallax-scroll-view.tsx     # Parallax scrolling effect
└── themed-text.tsx              # Themed text component

constants/
└── theme.ts                     # Colors, fonts, and theme constants

hooks/
└── use-color-scheme.ts          # Color scheme detection hook
    ```

## 💻 Core Components

### Paginated List (index.tsx)
```tsx
export default function PaginatedList() {
    const [items, setItems] = useState<Item[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchData = async () => {
        if (loading || !hasMore) return;
        setLoading(true);

        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_limit=${ITEMS_PER_PAGE}&_page=${page}`
        );

        setItems(prev => [...prev, ...response.data]);
        setPage(prev => prev + 1);

        if (response.data.length < ITEMS_PER_PAGE) {
            setHasMore(false);
        }
        setLoading(false);
    };

    return (
        <FlatList
            data={items}
            renderItem={({ item }) => <View><Text>{item.title}</Text></View>}
            onEndReached={fetchData}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loading ? <ActivityIndicator /> : null}
        />
    );
}
```

### Context API (AppContext.tsx)
```tsx
type AppContextType = {
    user: { id: number; name: string } | null;
    setUser: (user: User | null) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User>(null);

    return (
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within AppProvider");
    }
    return context;
};
```

### Tab Navigation (_layout.tsx)
```tsx
export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={28} name="house.fill" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={28} name="paperplane.fill" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (18.x or newer)
- npm or yarn or bun
- iOS: Xcode 14+ (for iOS simulator)
- Android: Android Studio (for Android emulator)
- Expo Go app on physical device (optional)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/your-app.git
    cd your-app
    ```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
bun install
    ```

3. **Start the development server**
```bash
npm start
# or
expo start
    ```

4. **Run on specific platform**
```bash
# iOS (requires macOS)
npm run ios

# Android
npm run android

# Web
npm run web
    ```

## 📦 Dependencies

```json
{
    "dependencies": {
    "expo": "~52.0.0",
        "expo-router": "~4.0.0",
        "expo-status-bar": "~2.0.0",
        "react": "18.3.1",
        "react-native": "0.76.0",
        "react-native-reanimated": "~3.16.0",
        "react-native-safe-area-context": "4.12.0",
        "react-native-screens": "~4.4.0",
        "axios": "^1.7.0",
        "@expo/vector-icons": "^14.0.0"
},
    "devDependencies": {
    "@types/react": "~18.3.12",
        "typescript": "~5.3.3"
}
}
```

## 🎨 Key Components

### CounterDisplay Component
```tsx
type CounterDisplayProps = {
    count: number
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Counter: {count}</Text>
        </View>
    );
};
```

### MainScreen with Context
```tsx
const MainScreen = () => {
    const { user, setUser } = useAppContext();
    const [name, setName] = useState<string>("");

    const updateUser = () => {
        setUser({ id: Date.now(), name: name });
    };

    return (
        <View>
            <Text>{user?.name || 'User not logged in'}</Text>
            <TextInput value={name} onChangeText={setName} />
            <Button title="Update User" onPress={updateUser} />
        </View>
    );
};
```

## 🧭 Navigation Structure

```
Root Layout (Stack Navigator)
├── (tabs) Group
│   ├── index.tsx (Home - Paginated List)
│   └── explore.tsx (Explore - Documentation)
└── modal.tsx (Modal Screen)
```

| Screen | Route | Description |
|--------|-------|-------------|
| Home | `/` | Paginated list of posts |
| Explore | `/explore` | App documentation and examples |
| Modal | `/modal` | Modal presentation example |

## 🔧 Required Fixes & Improvements

### 1. Remove Node.js-specific import
```tsx
// In CounterDisplay.tsx - REMOVE THIS LINE:
import { inspect } from "node:util";
```

### 2. Fix Context Provider Placement
Wrap your app with `AppProvider` in root layout:

```tsx
// app/_layout.tsx
import { AppProvider } from './context/AppContext';

export default function RootLayout() {
    return (
        <AppProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" />
                    <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
                </Stack>
            </ThemeProvider>
        </AppProvider>
    );
}
```

### 3. Add TypeScript Types for API Response
```tsx
// types.ts
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}
    ```

### 4. Improve Error Handling
```tsx
const fetchData = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_limit=${ITEMS_PER_PAGE}&_page=${page}`
        );
        const newItems = response.data;
        setItems(prev => [...prev, ...newItems]);
        setPage(prev => prev + 1);
        setHasMore(newItems.length === ITEMS_PER_PAGE);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Network error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    } finally {
        setLoading(false);
    }
};
```

## 📱 Running the App

### Development Builds
```bash
# Create a development build
expo run:ios
expo run:android

# Prebuild for native directories
npx expo prebuild
    ```

### Production Builds
```bash
# Android APK
eas build -p android --profile preview

# iOS IPA
eas build -p ios --profile preview

# Submit to stores
eas submit -p android
eas submit -p ios
    ```

## 🧠 Key Learning Points

- ✅ File-based routing with Expo Router
- ✅ Infinite scrolling with FlatList and pagination
- ✅ Global state management with Context API
- ✅ Cross-platform development (iOS, Android, Web)
- ✅ Dark/light mode theming
- ✅ TypeScript for type safety
- ✅ Axios for API integration
- ✅ Reanimated for smooth animations
- ✅ Haptic feedback integration

## 🔮 Future Improvements

- [ ] Add pull-to-refresh functionality
- [ ] Implement search and filtering
- [ ] Add offline support with AsyncStorage
- [ ] Integrate push notifications
- [ ] Add authentication flow
- [ ] Implement deep linking
- [ ] Add analytics tracking
- [ ] Create widget support
- [ ] Add end-to-end tests
- [ ] Implement CI/CD pipeline

## 🐛 Common Issues & Solutions

### Issue: Metro bundler cache issues
**Solution:**
```bash
npx expo start -c
# or
expo start --clear
    ```

### Issue: iOS build fails
**Solution:**
```bash
cd ios && pod install && cd ..
npx expo prebuild --clean
    ```

### Issue: Context error "must be used within provider"
**Solution:** Ensure `AppProvider` wraps the component tree in `_layout.tsx`

## 📄 License

This project is open-source and available for learning purposes.

## 👨‍💻 Author

Created as a demonstration of React Native Expo best practices and modern mobile development.

---

**Build Amazing Mobile Apps with Expo! 📱**
```