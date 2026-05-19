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
import LineChart from './assets/img/Line-Chart.svg';
import FullCircleGraph from './assets/img/Full-circle-graph.svg';
import CircleGraph2 from './assets/img/Circle-Graph-2.svg';
import CircleGraph3 from './assets/img/Circle-Graph-3.svg';

function App() {
  const [activeChip, setActiveChip] = useState('Финансы');
  const [activeTab, setActiveTab] = useState('Главная');
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
        {activeTab === 'Риски' ? (
          <div className="flex gap-[10px] items-start justify-center pb-[10px] px-[16px] relative shrink-0 w-full">
            <div className="flex flex-[1_0_0] gap-[10px] h-[44px] items-center min-w-px relative" />
            <div className="relative self-stretch shrink-0 w-[8px]" />
            <div className="flex flex-[1_0_0] gap-[10px] h-[44px] items-center justify-end min-w-px relative" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col h-[38px] items-center justify-center pt-[6px] w-[250px]">
              <p className="font-semibold leading-[18px] text-[15px] text-[#1a1a1a] text-center tracking-[-0.23px] whitespace-nowrap">
                Риски для бизнеса
              </p>
            </div>
          </div>
        ) : (
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
        )}

        {/* Main Content */}
        <div className="h-[812px] overflow-y-auto" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '16px', paddingBottom: '16px' }}>
          {activeTab === 'Главная' ? (
            <div>
              {/* Title Section */}
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
              <div
                className={`flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0 cursor-pointer ${activeChip === 'Маркетинг' ? 'bg-[#d9e0e8]' : 'bg-[#FFFFFF]'}`}
                onClick={() => setActiveChip('Маркетинг')}
              >
                <p className={`leading-[20px] text-[14px] whitespace-nowrap ${activeChip === 'Маркетинг' ? 'font-medium text-[#3a3b4f]' : 'font-normal text-black'}`}>
                  Маркетинг
                </p>
              </div>
              <div
                className={`flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0 cursor-pointer ${activeChip === 'Сервис' ? 'bg-[#d9e0e8]' : 'bg-[#FFFFFF]'}`}
                onClick={() => setActiveChip('Сервис')}
              >
                <p className={`leading-[20px] text-[14px] whitespace-nowrap ${activeChip === 'Сервис' ? 'font-medium text-[#3a3b4f]' : 'font-normal text-black'}`}>
                  Сервис
                </p>
              </div>
              <div
                className={`flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0 cursor-pointer ${activeChip === 'Клиентский опыт' ? 'bg-[#d9e0e8]' : 'bg-[#FFFFFF]'}`}
                onClick={() => setActiveChip('Клиентский опыт')}
              >
                <p className={`leading-[20px] text-[14px] whitespace-nowrap ${activeChip === 'Клиентский опыт' ? 'font-medium text-[#3a3b4f]' : 'font-normal text-black'}`}>
                  Клиентский опыт
                </p>
              </div>
              <div
                className={`flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0 cursor-pointer ${activeChip === 'HR и ресурсы' ? 'bg-[#d9e0e8]' : 'bg-[#FFFFFF]'}`}
                onClick={() => setActiveChip('HR и ресурсы')}
              >
                <p className={`leading-[20px] text-[14px] whitespace-nowrap ${activeChip === 'HR и ресурсы' ? 'font-medium text-[#3a3b4f]' : 'font-normal text-black'}`}>
                  HR и ресурсы
                </p>
              </div>
              <div
                className={`flex items-center justify-center px-[12px] py-[6px] rounded-[16px] shrink-0 cursor-pointer ${activeChip === 'Стратегия' ? 'bg-[#d9e0e8]' : 'bg-[#FFFFFF]'}`}
                onClick={() => setActiveChip('Стратегия')}
              >
                <p className={`leading-[20px] text-[14px] whitespace-nowrap ${activeChip === 'Стратегия' ? 'font-medium text-[#3a3b4f]' : 'font-normal text-black'}`}>
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
              ) : activeChip === 'Маркетинг' ? (
                <>
                  {/* Title with arrow */}
                  <div className="flex gap-[35px] items-center w-[343px]">
                    <p className="flex-1 font-medium leading-[24px] text-[16px] text-black">
                      Маркетинг
                    </p>
                    <img src={arrowRight} alt="" className="w-[24px] h-[24px]" />
                  </div>

                  {/* Marketing Cards */}
                  <div className="flex gap-[8px] w-full">
                    {/* Card 1: ROI маркетинга */}
                    <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] flex-1">
                      <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                        ROI маркетинга
                      </p>
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex items-center">
                          <div className="flex gap-[4px] items-baseline text-[#10c44b]">
                            <p className="font-semibold leading-[32px] text-[24px]">
                              185
                            </p>
                            <p className="font-normal leading-[20px] text-[14px]">
                              %
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-[4px] items-center">
                          <img src={arrowUp} alt="" className="w-[16px] h-[16px]" />
                          <p className="font-normal leading-[16px] text-[12px] text-[#818587] whitespace-nowrap">
                            Маржа: 42%
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Конверсия сайта */}
                    <div className="bg-[#FFFFFF] flex flex-col h-[128px] justify-between p-[16px] rounded-[16px] flex-1">
                      <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                        Конверсия сайта
                      </p>
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[8px] items-baseline">
                          <div className="flex gap-[4px] items-baseline text-black">
                            <p className="font-semibold leading-[32px] text-[24px]">
                              3.8
                            </p>
                            <p className="font-normal leading-[20px] text-[14px]">
                              %
                            </p>
                          </div>
                          <p className="font-medium leading-[24px] text-[#00c03f] text-[16px]">
                            +0.6%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : activeChip === 'Сервис' ? (
                <>
                  {/* Title with arrow */}
                  <div className="flex gap-[35px] items-center w-[343px]">
                    <p className="flex-1 font-medium leading-[24px] text-[16px] text-black">
                      Сервис
                    </p>
                    <img src={arrowRight} alt="" className="w-[24px] h-[24px]" />
                  </div>

                  {/* Service Cards */}
                  <div className="flex flex-col gap-[8px] w-full">
                    {/* Card 1: ROI сервиса */}
                    <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] w-full">
                      <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                        ROI сервиса
                      </p>
                      <div className="flex gap-[12px] items-center w-full">
                        <div className="flex flex-1 items-center">
                          <div className="flex gap-[4px] items-baseline text-[#10c44b] text-center whitespace-nowrap">
                            <p className="font-semibold leading-[32px] text-[24px]">
                              185
                            </p>
                            <p className="font-normal leading-[20px] text-[14px]">
                              %
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-[4px] items-center">
                          <img src={arrowUp} alt="" className="w-[24px] h-[24px]" />
                          <p className="font-medium leading-[24px] text-[16px] text-[#818587] text-center whitespace-nowrap">
                            Маржа: 44%
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Эффективность загрузки сервиса */}
                    <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] w-full">
                      <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                        Эффективность загрузки сервиса
                      </p>
                      <div className="flex flex-col gap-[12px] w-full">
                        <div className="flex gap-[8px] items-baseline text-center whitespace-nowrap">
                          <div className="flex gap-[4px] items-baseline text-black">
                            <p className="font-semibold leading-[32px] text-[24px]">
                              89
                            </p>
                            <p className="font-normal leading-[20px] text-[14px]">
                              %
                            </p>
                          </div>
                          <p className="font-medium leading-[24px] text-[#00c03f] text-[16px]">
                            +2%
                          </p>
                        </div>
                        <div className="flex flex-col gap-[12px] w-full">
                          <div className="flex items-start w-full">
                            <img src={LineChart} alt="" className="w-full h-[32px]" />
                          </div>
                          <div className="flex flex-col gap-[8px] w-full">
                            <div className="flex gap-[8px] items-center w-full">
                              <div className="bg-[#6cae75] h-[12px] rounded-[2px] w-[6px]" />
                              <div className="flex flex-1 items-center justify-between text-black text-center whitespace-nowrap">
                                <p className="font-normal leading-[16px] text-[12px]">
                                  Выполнено во время
                                </p>
                                <p className="font-semibold leading-[20px] text-[14px]">
                                  65%
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-[8px] items-center w-full">
                              <div className="bg-[#ffa630] h-[12px] rounded-[2px] w-[6px]" />
                              <div className="flex flex-1 items-center justify-between text-black text-center whitespace-nowrap">
                                <p className="font-normal leading-[16px] text-[12px]">
                                  В работе
                                </p>
                                <p className="font-semibold leading-[20px] text-[14px]">
                                  24%
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-[8px] items-center w-full">
                              <div className="bg-[#fc4135] h-[12px] rounded-[2px] w-[6px]" />
                              <div className="flex flex-1 items-center justify-between">
                                <p className="font-normal leading-[16px] text-[12px] text-black text-center whitespace-nowrap">
                                  Просроченные / недоезды
                                </p>
                                <div className="flex gap-[16px] items-center">
                                  <p className="font-semibold leading-[20px] text-[14px] text-black text-center whitespace-nowrap">
                                    11%
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : activeChip === 'Клиентский опыт' ? (
                <>
                  {/* Title with arrow */}
                  <div className="flex gap-[35px] items-center w-[343px]">
                    <p className="flex-1 font-medium leading-[24px] text-[16px] text-black">
                      Клиентский опыт
                    </p>
                    <img src={arrowRight} alt="" className="w-[24px] h-[24px]" />
                  </div>

                  {/* Customer Experience Card */}
                  <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] w-full">
                    <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                      Потребительская лояльность
                    </p>
                    <div className="flex gap-[24px] items-center w-full">
                      {/* Full Circle Graph */}
                      <div className="relative w-[164px] h-[164px] flex-shrink-0">
                        <img src={FullCircleGraph} alt="" className="w-full h-full" />
                        {/* Center text */}
                        <div className="absolute left-[66px] top-[53px] flex flex-col gap-[2px] items-center justify-center">
                          <p className="font-normal leading-[24px] text-[16px] text-black text-center whitespace-nowrap">
                            NPS
                          </p>
                          <p className="font-semibold leading-[32px] text-[24px] text-black text-center whitespace-nowrap">
                            48
                          </p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-col gap-[16px] flex-1">
                        {/* Удовлетворены */}
                        <div className="flex gap-[12px] items-center w-full">
                          <div className="bg-[#6cae75] h-full rounded-[2px] w-[4px]" />
                          <div className="flex flex-col gap-[8px] flex-1">
                            <p className="font-normal leading-[16px] text-[12px] text-black whitespace-nowrap">
                              Удовлетворены
                            </p>
                            <div className="flex gap-[12px] items-center justify-center">
                              <p className="font-medium leading-[20px] text-[14px] text-black w-[35px]">
                                65%
                              </p>
                              <div className="bg-[#eeeff1] w-px h-full" />
                              <p className="font-normal leading-[20px] text-[#818587] text-[14px] text-center whitespace-nowrap">
                                1223
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Нейтральные */}
                        <div className="flex gap-[12px] items-center w-full">
                          <div className="bg-[#ffa630] h-full rounded-[2px] w-[4px]" />
                          <div className="flex flex-col gap-[8px] flex-1">
                            <p className="font-normal leading-[16px] text-[12px] text-black whitespace-nowrap">
                              Нейтральные
                            </p>
                            <div className="flex gap-[12px] items-center">
                              <p className="font-medium leading-[20px] text-[14px] text-black w-[35px]">
                                24%
                              </p>
                              <div className="bg-[#eeeff1] w-px h-full" />
                              <p className="font-normal leading-[20px] text-[#818587] text-[14px] text-center whitespace-nowrap">
                                317
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Критики */}
                        <div className="flex gap-[12px] items-center w-full">
                          <div className="bg-[#fc4135] h-full rounded-[2px] w-[4px]" />
                          <div className="flex flex-col gap-[8px] flex-1">
                            <p className="font-normal leading-[16px] text-[12px] text-black whitespace-nowrap">
                              Критики
                            </p>
                            <div className="flex gap-[12px] items-center justify-center">
                              <p className="font-medium leading-[20px] text-[14px] text-black w-[35px]">
                                11%
                              </p>
                              <div className="bg-[#eeeff1] w-px h-full" />
                              <p className="font-normal leading-[20px] text-[#818587] text-[14px] text-center whitespace-nowrap">
                                53
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : activeChip === 'HR и ресурсы' ? (
                <>
                  {/* Title with arrow */}
                  <div className="flex gap-[35px] items-center w-[343px]">
                    <p className="flex-1 font-medium leading-[24px] text-[16px] text-black">
                      HR и ресурсы
                    </p>
                    <img src={arrowRight} alt="" className="w-[24px] h-[24px]" />
                  </div>

                  {/* HR Cards */}
                  <div className="flex gap-[8px] w-full">
                    {/* Left column */}
                    <div className="flex flex-col gap-[8px] flex-1">
                      {/* Card 1: Общая текучка */}
                      <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] w-full">
                        <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                          Общая текучка
                        </p>
                        <div className="flex flex-col gap-[12px]">
                          <div className="flex gap-[4px] items-baseline">
                            <p className="font-semibold leading-[32px] text-[24px] text-black">
                              14
                            </p>
                            <p className="font-normal leading-[20px] text-[14px] text-black">
                              %
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 2: Текучка ключевого персонала */}
                      <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] w-full">
                        <p className="font-normal leading-[20px] text-[14px] text-black w-full">
                          Текучка ключевого персонала
                        </p>
                        <div className="flex flex-col gap-[12px]">
                          <div className="flex gap-[4px] items-baseline text-[#10c44b]">
                            <p className="font-semibold leading-[32px] text-[24px]">
                              6
                            </p>
                            <p className="font-normal leading-[20px] text-[14px]">
                              %
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] flex-1">
                      <p className="font-normal leading-[20px] text-[14px] text-black w-full whitespace-pre-wrap">
                        Соотношение
ФОТ к выручке
                      </p>
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[8px] items-baseline">
                          <div className="flex gap-[4px] items-baseline text-black">
                            <p className="font-semibold leading-[32px] text-[24px]">
                              28
                            </p>
                            <p className="font-normal leading-[20px] text-[14px]">
                              %
                            </p>
                          </div>
                          <p className="font-medium leading-[24px] text-[#00c03f] text-[16px]">
                            -0.6%
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col flex-[1_0_0] items-start justify-end w-full">
                        <div className="bg-[#d8ebfb] flex-[1_0_0] mb-[-27px] rounded-[8px] w-full" />
                        <div className="bg-[#00a4ff] h-[27px] rounded-[8px] shrink-0 w-full" />
                      </div>
                    </div>
                  </div>
                </>
              ) : activeChip === 'Стратегия' ? (
                <>
                  {/* Title with arrow */}
                  <div className="flex gap-[35px] items-center w-[343px]">
                    <p className="flex-1 font-medium leading-[24px] text-[16px] text-black">
                      Стратегические инициативы
                    </p>
                    <img src={arrowRight} alt="" className="w-[24px] h-[24px]" />
                  </div>

                  {/* Strategy Cards */}
                  <div className="flex flex-col gap-[12px] w-full">
                    {/* Card 1: Достижение стратегических целей */}
                    <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] w-full">
                      <p className="font-normal leading-[24px] text-[16px] text-black">
                        Достижение стратегических целей
                      </p>
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[8px] items-baseline">
                          <div className="flex gap-[4px] items-baseline text-black">
                            <p className="font-semibold leading-[32px] text-[24px]">
                              65
                            </p>
                            <p className="font-normal leading-[20px] text-[14px]">
                              %
                            </p>
                          </div>
                          <p className="font-medium leading-[24px] text-[#00c03f] text-[16px]">
                            +1%
                          </p>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                          <div className="flex items-start">
                            <div className="bg-[#6cae75] h-[32px] rounded-[8px] w-[218px]" />
                            <div className="bg-[#ffa630] h-[32px] rounded-[8px] w-[62px]" />
                            <div className="bg-[#fc4135] flex-1 h-[32px] rounded-[6px]" />
                          </div>
                          <div className="flex flex-col gap-[8px]">
                            <div className="flex gap-[8px] items-center">
                              <div className="bg-[#6cae75] h-[12px] rounded-[2px] w-[6px]" />
                              <div className="flex flex-1 items-center justify-between text-black text-center whitespace-nowrap">
                                <p className="font-normal leading-[16px] text-[12px]">
                                  Выполнено
                                </p>
                                <p className="font-semibold leading-[20px] text-[14px]">
                                  65%
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-[8px] items-center">
                              <div className="bg-[#ffa630] h-[12px] rounded-[2px] w-[6px]" />
                              <div className="flex flex-1 items-center justify-between text-black text-center whitespace-nowrap">
                                <p className="font-normal leading-[16px] text-[12px]">
                                  В работе
                                </p>
                                <p className="font-semibold leading-[20px] text-[14px]">
                                  24%
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-[8px] items-center">
                              <div className="bg-[#fc4135] h-[12px] rounded-[2px] w-[6px]" />
                              <div className="flex flex-1 items-center justify-between">
                                <p className="font-normal leading-[16px] text-[12px] text-black text-center whitespace-nowrap">
                                  Риск
                                </p>
                                <div className="flex gap-[16px] items-center">
                                  <p className="font-semibold leading-[20px] text-[14px] text-black text-center whitespace-nowrap">
                                    11%
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Всего целей */}
                    <div className="bg-[#FFFFFF] flex flex-col gap-[16px] items-start pt-[24px] pb-[16px] px-[16px] rounded-[16px] w-full">
                      <div className="h-[124px] overflow-hidden relative w-full">
                        <img src={CircleGraph2} alt="" className="w-full h-full" />
                        <div className="absolute left-1/2 top-[70px] -translate-x-1/2 flex flex-col gap-[2px] items-center justify-center text-black text-center whitespace-nowrap">
                          <p className="font-normal leading-[20px] text-[14px]">
                            Всего целей
                          </p>
                          <p className="font-semibold leading-[32px] text-[24px]">
                            26
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] w-full">
                        <div className="flex gap-[8px] items-center">
                          <div className="bg-[#6cae75] h-[12px] rounded-[2px] w-[6px]" />
                          <div className="flex flex-1 items-center justify-between text-black text-center whitespace-nowrap">
                            <p className="font-normal leading-[16px] text-[12px]">
                              Выполнены
                            </p>
                            <p className="font-semibold leading-[20px] text-[14px]">
                              18
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-[8px] items-center">
                          <div className="bg-[#ffa630] h-[12px] rounded-[2px] w-[6px]" />
                          <div className="flex flex-1 items-center justify-between text-black text-center whitespace-nowrap">
                            <p className="font-normal leading-[16px] text-[12px]">
                              В процессе
                            </p>
                            <p className="font-semibold leading-[20px] text-[14px]">
                              6
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-[8px] items-center">
                          <div className="bg-[#fc4135] h-[12px] rounded-[2px] w-[6px]" />
                          <div className="flex flex-1 items-center justify-between text-black text-center whitespace-nowrap">
                            <p className="font-normal leading-[16px] text-[12px]">
                              В зоне риска
                            </p>
                            <p className="font-semibold leading-[20px] text-[14px]">
                              2
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Two small cards */}
                    <div className="flex gap-[8px] w-full">
                      {/* Конкурентное позиционирование */}
                      <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] rounded-[16px] flex-1">
                        <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                          Конкурентное
                          <br />
                          позиционирование
                        </p>
                        <div className="flex flex-col gap-[12px]">
                          <div className="flex gap-[4px] items-baseline text-black text-center whitespace-nowrap">
                            <p className="font-semibold leading-[32px] text-[24px]">
                              #2
                            </p>
                            <p className="font-normal leading-[20px] text-[14px]">
                              на рынке
                            </p>
                          </div>
                          <div className="flex flex-col gap-[4px]">
                            <p className="font-normal leading-[16px] text-[#818587] text-[12px] whitespace-nowrap">
                              Рост доли рынка
                            </p>
                            <div className="flex gap-[4px] items-center">
                              <img src={arrowUp} alt="" className="w-[16px] h-[16px]" />
                              <p className="font-normal leading-[16px] text-[#00c03f] text-[12px] text-center whitespace-nowrap">
                                +4%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Индекс изменений */}
                      <div className="bg-[#FFFFFF] flex flex-col justify-between p-[16px] rounded-[16px] flex-1">
                        <p className="font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
                          Индекс изменений
                        </p>
                        <div className="flex flex-col gap-[12px]">
                          <div className="flex gap-[8px] items-baseline text-center whitespace-nowrap">
                            <div className="flex gap-[4px] items-baseline text-black">
                              <p className="font-semibold leading-[32px] text-[24px]">
                                83
                              </p>
                              <p className="font-normal leading-[20px] text-[14px]">
                                %
                              </p>
                            </div>
                            <p className="font-medium leading-[24px] text-[#00c03f] text-[16px]">
                              +0.6%
                            </p>
                          </div>
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
          ) : activeTab === 'Риски' ? (
            <div className="flex flex-col gap-[24px] items-start">
              {/* Критические отклонения Section */}
              <div className="flex flex-col items-start w-full">
                <div className="bg-[#ffffff] flex flex-col gap-[16px] items-start p-[16px] rounded-[16px] w-full" style={{ backgroundColor: '#ffffff' }}>
                  <p className="font-normal leading-[24px] text-[16px] text-black w-full">
                    Критические отклонения
                  </p>
                  
                  {/* KPI по продажам Card */}
                  <div className="flex flex-col gap-[12px] items-start w-full">
                    <div className="bg-[#fcf3f3] flex flex-col gap-[12px] items-start p-[12px] rounded-[12px] w-full">
                      <div className="flex flex-col gap-[8px] items-start w-full">
                        <p className="font-medium leading-[24px] text-[16px] text-black w-full">
                          KPI по продажам
                        </p>
                        <div className="flex gap-[8px] items-start leading-[20px] text-[14px] w-full">
                          <p className="flex-1 font-normal text-[#818587]">
                            План: 300 в месяц
                          </p>
                          <p className="font-semibold text-black whitespace-nowrap">
                            Сейчас: 260
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start w-full">
                        <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                          <div className="flex gap-[4px] items-baseline text-black">
                            <p className="font-normal leading-[20px] text-[14px]">
                              Выполнение
                            </p>
                            <p className="font-semibold leading-[32px] text-[24px]">
                              72
                            </p>
                            <p className="font-normal leading-[20px] text-[14px]">
                              %
                            </p>
                          </div>
                          <p className="font-medium leading-[24px] text-[#818587] text-[16px]">
                            +0%
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <div className="flex isolate items-start w-full">
                          <div className="bg-[#fc4135] h-[20px] mr-[-40px] rounded-[20px] w-[242px] z-[2]" />
                          <div className="bg-white flex-1 h-[20px] min-w-px rounded-[20px] z-[1]" />
                        </div>
                      </div>
                    </div>

                    {/* Просрочка стратегического проекта CRM Card */}
                    <div className="bg-[#fcf3f3] flex flex-col gap-[12px] items-start p-[12px] rounded-[12px] w-full">
                      <div className="flex flex-col gap-[8px] items-start w-full">
                        <p className="font-medium leading-[24px] text-[16px] text-black w-full">
                          Просрочка стратегического проекта CRM
                        </p>
                        <div className="flex gap-[8px] items-start w-full">
                          <p className="flex-1 font-normal leading-[20px] text-[#818587] text-[14px]">
                            Дата сдачи: 29.03.2026
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start w-full">
                        <div className="flex gap-[8px] items-baseline">
                          <div className="flex gap-[4px] items-baseline whitespace-nowrap">
                            <p className="font-normal leading-[20px] text-[14px] text-black">
                              Просрочка
                            </p>
                            <p className="font-semibold leading-[32px] text-[#ff4c4c] text-[24px]">
                              45
                            </p>
                            <p className="font-normal leading-[20px] text-[#ff4c4c] text-[14px]">
                              дней
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Рост стоимости привлечения клиента Card */}
                    <div className="bg-[#fcf3f3] flex flex-col gap-[12px] items-start p-[12px] rounded-[12px] w-full">
                      <div className="flex flex-col gap-[8px] items-start w-full">
                        <p className="font-medium leading-[24px] text-[16px] text-black w-full">
                          Рост стоимости привлечения клиента
                        </p>
                        <div className="flex gap-[8px] items-start leading-[20px] text-[14px] w-full">
                          <p className="flex-1 font-normal text-[#818587]">
                            План: 1 300 ₽
                          </p>
                          <p className="font-semibold text-black whitespace-nowrap">
                            Сейчас: 1 794 ₽
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start w-full">
                        <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                          <div className="flex gap-[4px] items-baseline text-black">
                            <p className="font-normal leading-[20px] text-[14px]">
                              Удорожание
                            </p>
                            <p className="font-semibold leading-[32px] text-[24px]">
                              38
                            </p>
                            <p className="font-normal leading-[20px] text-[14px]">
                              %
                            </p>
                          </div>
                          <p className="font-medium leading-[24px] text-[#ff4c4c] text-[16px]">
                            +2%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Зоны риска Section */}
              <div className="flex flex-col gap-[12px] items-start w-[343px]">
                <div className="flex gap-[35px] items-center w-[343px]">
                  <p className="flex-1 font-medium leading-[24px] text-[16px] text-black">
                    Зоны риска
                  </p>
                  <img src={arrowRight} alt="" className="w-[24px] h-[24px]" />
                </div>
                <div className="flex gap-[8px] items-start w-full">
                  <div className="bg-[#ffffff] flex flex-1 flex-col gap-[16px] items-start p-[16px] rounded-[16px]" style={{ backgroundColor: '#ffffff' }}>
                    <p className="font-normal leading-[20px] text-[14px] text-black text-center whitespace-nowrap">
                      Высокий риск
                    </p>
                    <div className="flex flex-col gap-[12px] items-start w-full">
                      <div className="flex items-center">
                        <div className="flex gap-[4px] items-baseline">
                          <p className="font-semibold leading-[32px] text-[#ff1834] text-[24px] text-center whitespace-nowrap">
                            2
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ffffff] flex flex-1 flex-col items-start justify-between p-[16px] rounded-[16px] self-stretch" style={{ backgroundColor: '#ffffff' }}>
                    <p className="font-normal leading-[20px] text-[14px] text-black text-center whitespace-nowrap">
                      Средний риск
                    </p>
                    <div className="flex flex-col gap-[12px] items-start w-full">
                      <div className="flex gap-[8px] items-baseline">
                        <div className="flex gap-[4px] items-baseline">
                          <p className="font-semibold leading-[32px] text-[#ffa630] text-[24px] text-center whitespace-nowrap">
                            5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Пороговые нарушения Section */}
              <div className="flex flex-col gap-[12px] items-start w-[343px]">
                <div className="flex gap-[35px] items-center w-[343px]">
                  <p className="flex-1 font-medium leading-[24px] text-[16px] text-black">
                    Пороговые нарушения
                  </p>
                  <img src={arrowRight} alt="" className="w-[24px] h-[24px]" />
                </div>
                <div className="bg-[#ffffff] flex flex-col gap-[16px] items-start p-[16px] rounded-[16px] w-full" style={{ backgroundColor: '#ffffff' }}>
                  <div className="flex flex-col gap-[12px] items-start w-full">
                    <div className="flex gap-[8px] items-baseline">
                      <div className="flex gap-[4px] items-baseline text-black text-center whitespace-nowrap">
                        <p className="font-semibold leading-[32px] text-[24px]">
                          4
                        </p>
                        <p className="font-normal leading-[20px] text-[14px]">
                          всего
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start w-full">
                    <div className="bg-[#f3f8fc] flex flex-col gap-[12px] items-start p-[12px] rounded-[12px] w-full">
                      <div className="flex flex-col gap-[8px] items-start w-full">
                        <p className="font-normal leading-[20px] text-[14px] text-black w-full">
                          SLA обработки заявок превышен на 18%
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#f3f8fc] flex flex-col gap-[12px] items-start p-[12px] rounded-[12px] w-full">
                      <div className="flex flex-col gap-[8px] items-start w-full">
                        <p className="font-normal leading-[20px] text-[14px] text-black w-full">
                          Загрузка сервиса: 97%
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#f3f8fc] flex flex-col gap-[12px] items-start p-[12px] rounded-[12px] w-full">
                      <div className="flex flex-col gap-[8px] items-start w-full">
                        <p className="font-normal leading-[20px] text-[14px] text-black w-full">
                          Текучесть ключевого персонала выше нормы на 6 %
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#f3f8fc] flex flex-col gap-[12px] items-start p-[12px] rounded-[12px] w-full">
                      <div className="flex flex-col gap-[8px] items-start w-full">
                        <p className="font-normal leading-[20px] text-[14px] text-black w-full">
                          Конверсия лендинга упала ниже цели
                          <br />
                          на 1.2 %
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Потенциальный ущерб Section */}
              <div className="flex flex-col items-start w-[343px]">
                <div className="bg-[#ffffff] flex flex-col gap-[16px] items-start pb-[16px] pt-[24px] px-[16px] rounded-[16px] w-full" style={{ backgroundColor: '#ffffff' }}>
                  {/* Circle Graph */}
                  <div className="w-[247px] h-[247px] mx-auto">
                    <img src={CircleGraph3} alt="" className="w-full h-full" />
                  </div>

                  {/* Damage Breakdown */}
                  <div className="flex flex-col gap-[16px] items-start w-full">
                    <div className="flex gap-[8px] items-start w-full">
                      <div className="flex items-center py-[4px]">
                        <div className="bg-[#a675a1] h-[12px] rounded-[2px] w-[6px]" />
                      </div>
                      <div className="flex flex-1 items-center justify-between text-black">
                        <p className="flex-1 font-normal leading-[16px] text-[12px]">
                          Снижение продаж из-за падения конверсии
                        </p>
                        <p className="font-semibold leading-[20px] text-[14px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>
                          620 тыс. ₽
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[8px] items-start w-full">
                      <div className="flex items-center py-[4px]">
                        <div className="bg-[#ff934f] h-[12px] rounded-[2px] w-[6px]" />
                      </div>
                      <div className="flex flex-1 items-center justify-between text-black">
                        <p className="flex-1 font-normal leading-[16px] text-[12px]">
                          Потери из-за просрочки стратегического проекта
                        </p>
                        <p className="font-semibold leading-[20px] text-[14px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>
                          430 тыс. ₽
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[8px] items-start w-full">
                      <div className="flex items-center py-[4px]">
                        <div className="bg-[#00a4ff] h-[12px] rounded-[2px] w-[6px]" />
                      </div>
                      <div className="flex flex-1 items-center justify-between text-black">
                        <p className="flex-1 font-normal leading-[16px] text-[12px]">
                          Дополнительные операционные расходы и простои
                        </p>
                        <p className="font-semibold leading-[20px] text-[14px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>
                          350 тыс. ₽
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Tab Bar */}
        <div className="flex items-start justify-center pb-[25px] pt-[16px] px-[21px] relative shrink-0 w-full">
          <div className="bg-[#F6F6F6] drop-shadow-[0px_8px_20px_rgba(0,0,0,0.12)] flex flex-1 items-start justify-center min-w-px px-[6px] py-[4px] relative rounded-[100px]">
            <div
              className={`flex flex-1 flex-col gap-px items-center justify-center min-w-px mr-[-8px] overflow-clip pb-[7px] pt-[6px] px-[8px] relative rounded-[100px] cursor-pointer ${activeTab === 'Главная' ? 'bg-[#e8e8e8]' : ''}`}
              onClick={() => setActiveTab('Главная')}
            >
              <img src={tabHome} alt="" className={`relative shrink-0 w-[28px] h-[28px] ${activeTab === 'Главная' ? '' : 'opacity-60'}`} style={{ filter: activeTab === 'Главная' ? 'brightness(0) saturate(100%) invert(34%) sepia(89%) saturate(2476%) hue-rotate(183deg) brightness(101%) contrast(101%)' : 'brightness(0) saturate(100%) invert(23%) sepia(12%) saturate(472%) hue-rotate(197deg) brightness(96%) contrast(91%)' }} />
              <p className={`font-['Manrope:SemiBold',sans-serif] font-semibold leading-[12px] min-w-full relative shrink-0 text-[10px] text-center tracking-[-0.1px] ${activeTab === 'Главная' ? 'text-[#00a4ff]' : 'text-[#3a3b4f]'}`}>
                Главная
              </p>
            </div>
            <div
              className={`flex flex-1 flex-col gap-[0.5px] items-center justify-center min-w-px mr-[-8px] pb-[7px] pt-[6px] px-[8px] relative rounded-[100px] cursor-pointer ${activeTab === 'Риски' ? 'bg-[#e8e8e8]' : ''}`}
              onClick={() => setActiveTab('Риски')}
            >
              <img src={tabRisk} alt="" className={`relative shrink-0 w-[28px] h-[28px] ${activeTab === 'Риски' ? '' : 'opacity-60'}`} style={{ filter: activeTab === 'Риски' ? 'brightness(0) saturate(100%) invert(34%) sepia(89%) saturate(2476%) hue-rotate(183deg) brightness(101%) contrast(101%)' : 'brightness(0) saturate(100%) invert(23%) sepia(12%) saturate(472%) hue-rotate(197deg) brightness(96%) contrast(91%)' }} />
              <p className={`font-['Manrope:SemiBold',sans-serif] font-semibold leading-[12px] min-w-full relative shrink-0 text-[10px] text-center ${activeTab === 'Риски' ? 'text-[#00a4ff]' : 'text-[#3a3b4f]'}`}>
                Риски
              </p>
            </div>
            <div
              className="flex flex-1 flex-col gap-[0.5px] items-center justify-center min-w-px pb-[7px] pt-[6px] px-[8px] relative rounded-[100px] opacity-50 cursor-not-allowed"
            >
              <img src={tabProfile} alt="" className="relative shrink-0 w-[28px] h-[28px]" style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(12%) saturate(472%) hue-rotate(197deg) brightness(96%) contrast(91%)' }} />
              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[12px] min-w-full relative shrink-0 text-[10px] text-center text-[#3a3b4f]">
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
