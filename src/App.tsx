import tabHome from './assets/icons/tab-home.svg';
import tabRisk from './assets/icons/tab-risk.svg';
import tabProfile from './assets/icons/tab-profile.svg';
import Levels from './assets/icons/Levels.svg';
import Notification from './assets/icons/Notification.svg';
import Logo from './assets/img/Logo.png';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] min-h-[812px] bg-[#EEF1F1] rounded-[32px] outline outline-[12px] outline-black overflow-hidden flex flex-col font-['Manrope']">
        {/* Status Bar */}
        <div className="flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-full">
          <div className="flex flex-[1_0_0] h-[22px] items-center justify-center min-w-px pt-[1.5px] relative">
            <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              9:41
            </p>
          </div>
          <div className="flex flex-[1_0_0] gap-[7px] h-[22px] items-center justify-center min-w-px pr-px pt-px relative">
            <img src={Levels} alt="" className="h-[22px] w-[94px]" />
          </div>
        </div>

        {/* Header */}
        <div className="flex gap-[10px] items-center pb-[10px] px-[16px] relative shrink-0 w-full">
          <div className="flex flex-[1_0_0] gap-[10px] items-center min-w-px relative">
            <div className="h-[44px] relative shrink-0 w-[160px]">
              <img src={Logo} alt="" className="h-full w-full object-contain" />
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full relative shrink-0 w-[8px]" />
          </div>
          <div className="flex flex-[1_0_0] gap-[10px] items-center justify-end min-w-px relative">
            <div className="w-[44px] h-[44px] rounded-full bg-[#F6F6F6] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] flex items-center justify-center relative shrink-0">
              <img src={Notification} alt="" className="w-[36px] h-[36px]" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 !px-4 !py-4 flex flex-col !gap-6 overflow-y-auto" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '16px', paddingBottom: '16px' }}>
          {/* Title Section */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-[20px] font-semibold leading-[28px] text-black">Сводка на сегодня</h1>
              <span className="text-[16px] text-[#767676]">13 мая 2026</span>
            </div>

            {/* KPI Cards */}
            <div className="flex !gap-2 overflow-x-auto !pb-2 mt-4" style={{ gap: '8px', marginTop: '16px' }}>
              {/* KPI Card 1 */}
              <div className="bg-[#FFFFFF] content-stretch flex flex-col gap-[24px] items-start p-[16px] relative rounded-[16px] size-full w-[210px] flex-shrink-0">
                <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
                  KPI по продажам
                </p>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center relative shrink-0 text-center whitespace-nowrap">
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black">
                      24%
                    </p>
                    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#00c03f] text-[16px]">
                      +1%
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex isolate items-start relative shrink-0 w-full">
                      <div className="bg-[#00a4ff] h-[12px] mr-[-32px] relative rounded-[12px] shrink-0 w-[32px] z-[2]" />
                      <div className="bg-[#d8ebfb] flex-[1_0_0] h-[12px] min-w-px relative rounded-[12px] z-[1]" />
                    </div>
                    <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818587] text-[12px] text-center whitespace-nowrap">
                      План: 8 тыс
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818587] text-[12px] text-center whitespace-nowrap">
                    Прогноз: 8.2 тыс
                  </p>
                </div>
              </div>

              {/* KPI Card 2 */}
              <div className="bg-[#FFFFFF] content-stretch flex flex-col gap-[24px] items-start p-[16px] relative rounded-[16px] size-full w-[210px] flex-shrink-0">
                <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
                  KPI по выручке
                </p>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center relative shrink-0 text-center whitespace-nowrap">
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black">
                      20%
                    </p>
                    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#00c03f] text-[16px]">
                      +4%
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex isolate items-start relative shrink-0 w-full">
                      <div className="bg-[#00a4ff] h-[12px] mr-[-32px] relative rounded-[12px] shrink-0 w-[32px] z-[2]" />
                      <div className="bg-[#d8ebfb] flex-[1_0_0] h-[12px] min-w-px relative rounded-[12px] z-[1]" />
                    </div>
                    <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818587] text-[12px] text-center whitespace-nowrap">
                      План: 1.2 млрд ₽
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818587] text-[12px] text-center whitespace-nowrap">
                    Прогноз: 1.3 млрд ₽
                  </p>
                </div>
              </div>

              {/* KPI Card 3 */}
              <div className="bg-[#FFFFFF] content-stretch flex flex-col gap-[24px] items-start p-[16px] relative rounded-[16px] size-full w-[210px] flex-shrink-0">
                <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
                  KPI по прибыли
                </p>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center relative shrink-0 text-center whitespace-nowrap">
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black">
                      7%
                    </p>
                    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#00c03f] text-[16px]">
                      +0.2%
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex isolate items-start relative shrink-0 w-full">
                      <div className="bg-[#00a4ff] h-[12px] mr-[-32px] relative rounded-[12px] shrink-0 w-[32px] z-[2]" />
                      <div className="bg-[#d8ebfb] flex-[1_0_0] h-[12px] min-w-px relative rounded-[12px] z-[1]" />
                    </div>
                    <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818587] text-[12px] text-center whitespace-nowrap">
                      План: 200 млн ₽
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818587] text-[12px] text-center whitespace-nowrap">
                    Прогноз: 210 млн ₽
                  </p>
                </div>
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
        <div className="flex items-start justify-center pb-[25px] pt-[16px] px-[21px] relative shrink-0 w-full">
          <div className="bg-[#F6F6F6] drop-shadow-[0px_8px_20px_rgba(0,0,0,0.12)] flex flex-1 items-start justify-center min-w-px px-[6px] py-[4px] relative rounded-[100px]">
            <div className="bg-[#e8e8e8] flex flex-1 flex-col gap-px items-center justify-center min-w-px mr-[-8px] overflow-clip pb-[7px] pt-[6px] px-[8px] relative rounded-[100px]">
              <img src={tabHome} alt="" className="relative shrink-0 w-[28px] h-[28px]" />
              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[12px] min-w-full relative shrink-0 text-[#00a4ff] text-[10px] text-center tracking-[-0.1px]">
                Главная
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-[0.5px] items-center justify-center min-w-px mr-[-8px] pb-[7px] pt-[6px] px-[8px] relative">
              <img src={tabRisk} alt="" className="relative shrink-0 w-[28px] h-[28px]" />
              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[12px] min-w-full relative shrink-0 text-[#3a3b4f] text-[10px] text-center">
                Риски
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-[0.5px] items-center justify-center min-w-px pb-[7px] pt-[6px] px-[8px] relative">
              <img src={tabProfile} alt="" className="relative shrink-0 w-[28px] h-[28px]" />
              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[12px] min-w-full relative shrink-0 text-[#3a3b4f] text-[10px] text-center">
                Профиль
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
