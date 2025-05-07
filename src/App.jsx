import Card from './components/Card'
import './App.css'
import MainLayout from './layouts/MainLayout'

function App() {
    return (
        <MainLayout>
            <div className="flex justify-center items-center min-h-screen gap-5">
                <Card
                    image="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    title="Delicious Meal"
                    description="This is a short description of the meal. It's tasty, healthy, and easy to prepare."
                />
                <Card
                    image="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    description="This is a short description of the meal. It's tasty, healthy, and easy to prepare."
                />
            </div>
        </MainLayout>
    )
}

export default App
