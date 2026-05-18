import { useState } from 'react';
import tabHome from './assets/icons/tab-home.svg';
import tabRisk from './assets/icons/tab-risk.svg';
import tabProfile from './assets/icons/tab-profile.svg';
import Levels from './assets/icons/Levels.svg';
import Notification from './assets/icons/Notification.svg';
import Logo from './assets/img/Logo.png';
import arrowRight from './assets/icons/arrow-right.svg';
import arrowUp from './assets/icons/arrow-up.svg';
import arrowDown from './assets/icons/arrow-down.svg';
import Graphic from './assets/img/Graphic.svg';
import CircleGraph from './assets/img/Circle-Graph.svg';

function App() {
  const [activeChip, setActiveChip] = useState('Финансы');
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] h-[812px] bg-[#EEF1F1] rounded-[32px] outline outline-[12px] outline-black flex flex-col overflow-hidden font-['Manrope']">
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
        <div className="h-[812px] overflow-y-auto" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '16px', paddingBottom: '16px' }}>
          {/* Title Section */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-[20px] leading-[28px] text-black" style={{ fontWeight: 600 }}>Сводка на сегодня</h1>
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

            {/* Button */}
            <div style={{ marginTop: '16px', marginBottom: '40px' }}>
              <div className="bg-[#3a3b4f] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] size-full">
                <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ color: '#FFFFFF' }}>
                  Смотреть все показатели KPI
                </p>
              </div>
            </div>

            {/* Chips Line */}
            <div className="flex gap-[8px] overflow-x-auto" style={{ gap: '8px' }}>
              {/* Active Chip */}
              <div
                className={`flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0 cursor-pointer ${activeChip === 'Финансы' ? 'bg-[#d9e0e8]' : 'bg-[#FFFFFF]'}`}
                onClick={() => setActiveChip('Финансы')}
              >
                <p className={`leading-[20px] text-[14px] whitespace-nowrap ${activeChip === 'Финансы' ? 'font-medium text-[#3a3b4f]' : 'font-normal text-black'}`}>
                  Финансы
                </p>
              </div>
              {/* Inactive Chips */}
              <div
                className={`flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0 cursor-pointer ${activeChip === 'Коммерция' ? 'bg-[#d9e0e8]' : 'bg-[#FFFFFF]'}`}
                onClick={() => setActiveChip('Коммерция')}
              >
                <p className={`leading-[20px] text-[14px] whitespace-nowrap ${activeChip === 'Коммерция' ? 'font-medium text-[#3a3b4f]' : 'font-normal text-black'}`}>
                  Коммерция
                </p>
              </div>
              <div className="bg-[#FFFFFF] flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0">
                <p className="font-normal leading-[20px] text-black text-[14px] whitespace-nowrap">
                  Маркетинг
                </p>
              </div>
              <div className="bg-[#FFFFFF] flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0">
                <p className="font-normal leading-[20px] text-black text-[14px] whitespace-nowrap">
                  Сервис
                </p>
              </div>
              <div className="bg-[#FFFFFF] flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0">
                <p className="font-normal leading-[20px] text-black text-[14px] whitespace-nowrap">
                  Клиентский опыт
                </p>
              </div>
              <div className="bg-[#FFFFFF] flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0">
                <p className="font-normal leading-[20px] text-black text-[14px] whitespace-nowrap">
                  HR и ресурсы
                </p>
              </div>
              <div className="bg-[#FFFFFF] flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0">
                <p className="font-normal leading-[20px] text-black text-[14px] whitespace-nowrap">
                  Стратегия
                </p>
              </div>
            </div>

            {/* Content Block */}
            <div className="flex flex-col gap-[12px] items-start mt-[24px]">
              {activeChip === 'Финансы' ? (
                <>
                  {/* Title with arrow */}
                  <div className="flex gap-[35px] items-center w-[343px]">
                    <p className="flex-1 font-medium leading-[24px] text-[16px] text-black">
                      Финансы
                    </p>
                    <img src={arrowRight} alt="" className="w-[24px] h-[24px]" />
                  </div>

                  {/* Finance Cards */}
                  <div className="flex flex-wrap gap-[8px] w-full">
                    {/* Card 1: Выручка */}
                    <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] w-[167.5px]">
                      <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                        Выручка
                      </p>
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[8px] items-center">
                          <div className="flex gap-[4px] items-baseline">
                            <p className="font-semibold leading-[32px] text-[24px] text-black">
                              240
                            </p>
                            <p className="font-normal leading-[20px] text-[14px] text-black">
                              млн ₽
                            </p>
                          </div>
                          <p className="font-medium leading-[24px] text-[16px] text-[#00c03f]">
                            +4%
                          </p>
                        </div>
                        <div className="h-[64px] overflow-hidden rounded-bl-[8px] rounded-br-[8px]">
                          <img src={Graphic} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>

                    {/* Card 2: EBITDA */}
                    <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] w-[167.5px]">
                      <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                        EBITDA
                      </p>
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[8px] items-center">
                          <div className="flex gap-[4px] items-baseline">
                            <p className="font-semibold leading-[32px] text-[24px] text-black">
                              40
                            </p>
                            <p className="font-normal leading-[20px] text-[14px] text-black">
                              млн ₽
                            </p>
                          </div>
                          <p className="font-medium leading-[24px] text-[16px] text-[#00c03f]">
                            +1%
                          </p>
                        </div>
                        <div className="h-[64px] overflow-hidden rounded-bl-[8px] rounded-br-[8px]">
                          <img src={Graphic} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Чистая прибыль */}
                    <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] w-[167.5px]">
                      <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                        Чистая прибыль
                      </p>
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[8px] items-center">
                          <div className="flex gap-[4px] items-baseline">
                            <p className="font-semibold leading-[32px] text-[24px] text-black">
                              56
                            </p>
                            <p className="font-normal leading-[20px] text-[14px] text-black">
                              млн ₽
                            </p>
                          </div>
                          <p className="font-medium leading-[24px] text-[16px] text-[#00c03f]">
                            +2%
                          </p>
                        </div>
                        <div className="h-[64px] overflow-hidden rounded-bl-[8px] rounded-br-[8px]">
                          <img src={Graphic} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>

                    {/* Card 4: Cash Flow */}
                    <div className="bg-[#FFFFFF] flex flex-col h-[176px] justify-between p-[16px] rounded-[16px] w-[167px]">
                      <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                        Cash Flow
                      </p>
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex items-center">
                          <div className="flex gap-[4px] items-baseline">
                            <p className="font-semibold leading-[32px] text-[24px] text-black">
                              +1.2
                            </p>
                            <p className="font-normal leading-[20px] text-[14px] text-black">
                              млн ₽
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-[4px] items-center">
                          <img src={arrowUp} alt="" className="w-[16px] h-[16px]" />
                          <p className="font-normal leading-[16px] text-[12px] text-[#767676] whitespace-nowrap">
                            Приток: 4.82 млн ₽
                          </p>
                        </div>
                        <div className="flex gap-[4px] items-center">
                          <img src={arrowDown} alt="" className="w-[16px] h-[16px]" />
                          <p className="font-normal leading-[16px] text-[12px] text-[#767676] whitespace-nowrap">
                            Отток: 3.58 млн ₽
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Commercial Data from Figma */}
                  {/* Title with arrow */}
                  <div className="flex gap-[35px] items-center w-[343px]">
                    <p className="flex-1 font-medium leading-[24px] text-[16px] text-black">
                      Коммерческие данные
                    </p>
                    <img src={arrowRight} alt="" className="w-[24px] h-[24px]" />
                  </div>

                  {/* Circle Graph Card */}
                  <div className="bg-[#FFFFFF] flex flex-col gap-[16px] items-start pt-[24px] pb-[16px] px-[16px] rounded-[16px] w-full">
                    <div className="h-[124px] overflow-hidden relative w-full">
                      {/* Circle Graph Visualization */}
                      <img src={CircleGraph} alt="" className="w-full h-full" />
                      {/* Center text */}
                      <div className="absolute left-1/2 top-[70px] -translate-x-1/2 flex flex-col gap-[2px] items-center justify-center text-black text-center whitespace-nowrap">
                        <p className="font-normal leading-[20px] text-[14px]">
                          Всего лидов
                        </p>
                        <p className="font-semibold leading-[32px] text-[24px]">
                          128
                        </p>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex flex-col gap-[8px] items-start w-full">
                      <div className="flex gap-[8px] items-center w-full">
                        <div className="bg-[#a675a1] h-[12px] rounded-[2px] w-[6px]" />
                        <div className="flex flex-1 items-center justify-between text-black text-center whitespace-nowrap">
                          <p className="font-normal leading-[16px] text-[12px]">
                            Целевые лиды
                          </p>
                          <p className="font-semibold leading-[20px] text-[14px]">
                            80
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-[8px] items-center w-full">
                        <div className="bg-[#ff934f] h-[12px] rounded-[2px] w-[6px]" />
                        <div className="flex flex-1 items-center justify-between text-black text-center whitespace-nowrap">
                          <p className="font-normal leading-[16px] text-[12px]">
                            Контракты
                          </p>
                          <p className="font-semibold leading-[20px] text-[14px]">
                            24
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-[8px] items-center w-full">
                        <div className="bg-[#00a4ff] h-[12px] rounded-[2px] w-[6px]" />
                        <div className="flex flex-1 items-center justify-between text-black text-center whitespace-nowrap">
                          <p className="font-normal leading-[16px] text-[12px]">
                            Выдачи
                          </p>
                          <p className="font-semibold leading-[20px] text-[14px]">
                            12
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Plan Fulfillment Card */}
                  <div className="bg-[#FFFFFF] flex flex-col gap-[16px] items-start p-[16px] rounded-[16px] w-full">
                    <p className="font-normal leading-[20px] text-[14px] text-black text-center whitespace-nowrap">
                      Выполнение плана
                    </p>
                    <div className="flex flex-col gap-[12px] items-start w-full">
                      <div className="flex gap-[8px] items-center w-full whitespace-nowrap">
                        <div className="flex flex-1 gap-[8px] items-center">
                          <p className="font-semibold leading-[32px] text-[24px] text-black">
                            24%
                          </p>
                          <p className="font-medium leading-[24px] text-[#00c03f] text-[16px]">
                            +1%
                          </p>
                        </div>
                        <p className="font-normal leading-[20px] text-[14px] text-black">
                          План: 8 тыс
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <div className="flex isolate items-start w-full">
                          <div className="bg-[#00a4ff] h-[20px] mr-[-40px] rounded-[20px] w-[75px] z-[2]" />
                          <div className="bg-[#d8ebfb] flex-1 h-[20px] min-w-px rounded-[20px] z-[1]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
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
