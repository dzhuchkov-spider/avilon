function App() {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] min-h-[812px] bg-[#EEF1F1] rounded-[32px] outline outline-[12px] outline-black overflow-hidden flex flex-col font-['Manrope']">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 pt-3 pb-2">
          <span className="text-[17px] font-semibold leading-[22px] text-black">9:41</span>
          <div className="flex items-center gap-1">
            <span className="material-icons text-[18px]">signal_cellular_alt</span>
            <span className="material-icons text-[18px]">wifi</span>
            <span className="material-icons text-[18px]">battery_full</span>
          </div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="material-icons text-[#3A3B4F] text-[28px]">menu</span>
            <span className="text-[18px] font-semibold text-[#3A3B4F]">Авилон</span>
          </div>
          <div className="w-[36px] h-[36px] rounded-full bg-white shadow-lg flex items-center justify-center">
            <span className="material-icons text-[20px] text-[#3A3B4F]">notifications</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 py-4 flex flex-col gap-6 overflow-y-auto">
          {/* Title Section */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-[20px] font-semibold leading-[28px] text-black">Сводка на сегодня</h1>
              <span className="text-[16px] text-[#767676]">13 мая 2026</span>
            </div>

            {/* KPI Cards */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {/* KPI Card 1 */}
              <div className="bg-white rounded-[16px] p-4 min-w-[200px] flex-shrink-0">
                <p className="text-[14px] font-normal text-black text-center mb-4">KPI по продажам</p>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-[24px] font-semibold text-black">24%</span>
                  <span className="text-[16px] font-medium text-[#00C03F]">+1%</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-[32px] h-[12px] bg-[#00A4FF] rounded-[12px]"></div>
                  <div className="flex-1 h-[12px] bg-[#D8EBFB] rounded-[12px]"></div>
                </div>
                <p className="text-[12px] text-[#818587] text-center mb-2">План: 8 тыс</p>
                <div className="border-t border-gray-200 my-2"></div>
                <p className="text-[12px] text-[#818587] text-center">Прогноз: 8.2 тыс</p>
              </div>

              {/* KPI Card 2 */}
              <div className="bg-white rounded-[16px] p-4 min-w-[200px] flex-shrink-0">
                <p className="text-[14px] font-normal text-black text-center mb-4">KPI по выручке</p>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-[24px] font-semibold text-black">20%</span>
                  <span className="text-[16px] font-medium text-[#00C03F]">+4%</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-[32px] h-[12px] bg-[#00A4FF] rounded-[12px]"></div>
                  <div className="flex-1 h-[12px] bg-[#D8EBFB] rounded-[12px]"></div>
                </div>
                <p className="text-[12px] text-[#818587] text-center mb-2">План: 1.2 млрд ₽</p>
                <div className="border-t border-gray-200 my-2"></div>
                <p className="text-[12px] text-[#818587] text-center">Прогноз: 1.3 млрд ₽</p>
              </div>

              {/* KPI Card 3 */}
              <div className="bg-white rounded-[16px] p-4 min-w-[200px] flex-shrink-0">
                <p className="text-[14px] font-normal text-black text-center mb-4">KPI по прибыли</p>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-[24px] font-semibold text-black">7%</span>
                  <span className="text-[16px] font-medium text-[#00C03F]">+0.2%</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-[32px] h-[12px] bg-[#00A4FF] rounded-[12px]"></div>
                  <div className="flex-1 h-[12px] bg-[#D8EBFB] rounded-[12px]"></div>
                </div>
                <p className="text-[12px] text-[#818587] text-center mb-2">План: 200 млн ₽</p>
                <div className="border-t border-gray-200 my-2"></div>
                <p className="text-[12px] text-[#818587] text-center">Прогноз: 210 млн ₽</p>
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <div>
            <h2 className="text-[18px] font-semibold text-black mb-4">Задачи на сегодня</h2>
            <div className="flex flex-col gap-3">
              {/* Task Item 1 */}
              <div className="bg-white rounded-[16px] p-4 flex items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-full bg-[#E8F4FD] flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-[#00A4FF] text-[20px]">shopping_cart</span>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-black">Проверить заказы</p>
                  <p className="text-[12px] text-[#818587]">5 новых заказов</p>
                </div>
                <span className="material-icons text-[#CCCCCC] text-[20px]">chevron_right</span>
              </div>

              {/* Task Item 2 */}
              <div className="bg-white rounded-[16px] p-4 flex items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-full bg-[#FFF4E5] flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-[#FF9500] text-[20px]">inventory_2</span>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-black">Обновить склад</p>
                  <p className="text-[12px] text-[#818587]">3 позиции на исходе</p>
                </div>
                <span className="material-icons text-[#CCCCCC] text-[20px]">chevron_right</span>
              </div>

              {/* Task Item 3 */}
              <div className="bg-white rounded-[16px] p-4 flex items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-[#4CAF50] text-[20px]">people</span>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-black">Встреча с командой</p>
                  <p className="text-[12px] text-[#818587]">15:00, конференц-зал</p>
                </div>
                <span className="material-icons text-[#CCCCCC] text-[20px]">chevron_right</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="bg-white/80 backdrop-blur-lg shadow-[0px_8px_40px_rgba(0,0,0,0.12)] rounded-t-[20px] px-4 py-4">
          <div className="flex justify-around">
            <div className="flex flex-col items-center gap-1 px-4 py-2 bg-[#F5F5F5] rounded-[100px]">
              <span className="material-icons text-[#00A4FF] text-[24px]">home</span>
              <span className="text-[10px] font-semibold text-[#00A4FF]">Главная</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-4 py-2">
              <span className="material-icons text-[#3A3B4F] text-[24px]">warning</span>
              <span className="text-[10px] font-semibold text-[#3A3B4F]">Риски</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-4 py-2">
              <span className="material-icons text-[#3A3B4F] text-[24px]">person</span>
              <span className="text-[10px] font-semibold text-[#3A3B4F]">Профиль</span>
            </div>
          </div>
          {/* Home Indicator */}
          <div className="flex justify-center mt-2">
            <div className="w-[144px] h-[5px] bg-black rounded-[100px]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
