import Head from 'next/head';
import { Image } from '../components/Image';
import { Container } from '../components/Layout';
import { Row, Col } from 'react-bootstrap';
import {
  BoxHome,
  BoxHomeWrapper,
  MainHome,
  Wrapper,
  CenterItems,
  CenterText,
} from '../components/Styles';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';
import { Sidebar } from '../components/Sidebar';
import Spacer from '../components/Spacer';
import { Box } from '../components/Box';
import { InputBox } from '../components/InputBox';
import { HorizontalBar } from '../components/HorizintalBar';
import { BorderBox } from '../components/Card';
import { CardBox } from '../components/Card';
import { Button } from '../components/Button';
import { H1, H3, P, H2 } from '../components/TypoGraphy';
import { useState, useEffect } from 'react';
import { SideArrow } from '../components/SideArrow';

const menu = [
  { text: 'Featured' },
  {
    text: 'Your Bets',
  },
  {
    text: 'Custom bets',
  },
];
const teams = [
  {
    winer: 'MINTOSA',
    tm: 'Wild',
    score: '14-1',
    looser: 'Monterial',
    tm2: 'Canadial',
    score2: '14-1',
    win: 'Wild Win',
    percentage: '23%',
  },
  {
    winer: 'MINTOSA',
    tm: 'Wild',
    score: '14-1',
    looser: 'Monterial',
    tm2: 'Canadial',
    score2: '14-1',
    win: 'Wild Win',
    percentage: '23%',
  },
];
const match = [
  {
    text: 'Monterial Candian',
  },
  {
    text: 'Minnisota wild',
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [bet, setBet] = useState(true);
  const [pick, setPick] = useState(false);
  const [team, setTeam] = useState(false);
  const [event, setEvent] = useState(false);
  const [frame, setFrame] = useState(false);
  const [final, setFinal] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <Spacer />
        <MainHome>
          <Sidebar />

          {bet && (
            <Box width={'60%'} title='Bets' menu={menu}>
              <BoxHomeWrapper>
                <BoxHome>
                  <InputBox width='48%'>
                    <H3>Bet type: Game winner</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/DOWN.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                  <InputBox width='48%'>
                    <H3
                      onClick={() => {
                        setBet(!bet), setPick(!pick);
                      }}
                    >
                      Create Bet
                    </H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/Union.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                </BoxHome>
                <Spacer />
                <HorizontalBar />
                {/* <HorizontalBar  /> */}
                {teams.map((item, index) => {
                  return (
                    <div key={index}>
                      <Spacer />
                      <MainHome>
                        <div style={{ display: 'flex' }}>
                          <Image
                            height='70px'
                            width={'5px'}
                            src='/assets/Rectangle.png'
                          />
                          <div style={{ marginLeft: '40px' }}>
                            <H2 font={'20px'}>
                              {item.winer}
                              <span
                                style={{
                                  marginLeft: '8px',
                                  fontStyle: 'italic',
                                  fontWeight: '200',
                                }}
                              >
                                {item.tm}
                              </span>
                            </H2>
                            <P color={'rgba(255, 255, 255, 0.6)'}>
                              {item.score}
                            </P>
                          </div>
                        </div>
                        <InputBox width={'30%'}>
                          <H3>{item.win}</H3>
                          <H3 green>{item.percentage}</H3>
                        </InputBox>
                      </MainHome>
                      <MainHome>
                        <div style={{ display: 'flex' }}>
                          <Image
                            height='70px'
                            width={'5px'}
                            src='/assets/Rectangle.png'
                          />
                          <div style={{ marginLeft: '40px' }}>
                            <H2 font={'20px'}>
                              {item.looser}
                              <span
                                style={{
                                  marginLeft: '8px',
                                  fontStyle: 'italic',
                                  fontWeight: '200',
                                }}
                              >
                                {item.tm2}
                              </span>
                            </H2>
                            <P color={'rgba(255, 255, 255, 0.6)'}>
                              {item.score2}
                            </P>
                          </div>
                        </div>
                        <InputBox width={'30%'}>
                          <H3>{item.win}</H3>
                          <H3 green>{item.percentage}</H3>
                        </InputBox>
                      </MainHome>
                      <HorizontalBar />
                    </div>
                  );
                })}
              </BoxHomeWrapper>
            </Box>
          )}
          {pick && (
            <Box left width={'60%'} title='Pick the Player/Team'>
              <BoxHomeWrapper>
                <BoxHome>
                  <InputBox width='48%'>
                    <H3>Search matchups</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/search.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                  <InputBox width='48%'>
                    <H3>Featured</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/DOWN.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                </BoxHome>
                <Spacer />
                <HorizontalBar />
                {teams.map((item, index) => {
                  return (
                    <>
                      <Spacer />
                      <MainHome>
                        <div>
                          <MainHome>
                            <div>
                              <H2 font={'20px'}>
                                {item.winer}
                                <span
                                  style={{
                                    marginLeft: '8px',
                                    fontStyle: 'italic',
                                    fontWeight: '200',
                                  }}
                                >
                                  {item.tm}
                                </span>
                              </H2>
                            </div>
                          </MainHome>
                          <MainHome>
                            <div>
                              <H2 font={'20px'}>
                                {item.looser}
                                <span
                                  style={{
                                    marginLeft: '8px',
                                    fontStyle: 'italic',
                                    fontWeight: '200',
                                  }}
                                >
                                  {item.tm2}
                                </span>
                              </H2>
                            </div>
                          </MainHome>
                        </div>
                        <div
                          onClick={() => {
                            setPick(!pick), setTeam(!team);
                          }}
                        >
                          <SideArrow />
                        </div>
                      </MainHome>
                      <HorizontalBar />
                    </>
                  );
                })}
              </BoxHomeWrapper>
            </Box>
          )}
          {team && (
            <Box left width={'60%'} title='Pick the Player/Team'>
              <BoxHomeWrapper>
                <BoxHome>
                  <InputBox width='48%'>
                    <H3>Search matchups</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/search.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                  <InputBox width='48%'>
                    <H3>Featured</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/DOWN.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                </BoxHome>
                <Spacer />
                <HorizontalBar />
                {match.map((item, index) => {
                  return (
                    <>
                      <Spacer />
                      <MainHome>
                        <div>
                          <MainHome>
                            <div>
                              <H2 font={'20px'}>{item.text}</H2>
                            </div>
                            {/* <InputBox>hello</InputBox> */}
                          </MainHome>
                        </div>
                        <div
                          onClick={() => {
                            setTeam(!team), setEvent(!event);
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          <SideArrow />
                        </div>
                      </MainHome>
                      <Spacer />
                      <HorizontalBar />
                    </>
                  );
                })}
              </BoxHomeWrapper>
            </Box>
          )}
          {event && (
            <Box left width={'60%'} title='pick the event'>
              <BoxHomeWrapper>
                <BoxHome>
                  <InputBox padding={'2px 35px'} width='8%'>
                    <H2>1</H2>
                  </InputBox>
                  <InputBox padding={'2px 35px'} width='8%'>
                    <H2>2</H2>
                  </InputBox>
                  <InputBox padding={'2px 35px'} width='8%'>
                    <H2>3</H2>
                  </InputBox>
                  <InputBox padding={'2px 35px'} width='8%'>
                    <H2>4</H2>
                  </InputBox>
                  <InputBox padding={'2px 35px'} width='8%'>
                    <H2>5</H2>
                  </InputBox>
                  <InputBox padding={'2px 35px'} width='8%'>
                    <H2>6</H2>
                  </InputBox>
                </BoxHome>
                <Spacer />
                <HorizontalBar />
                {match.map((item, index) => {
                  return (
                    <>
                      <Spacer />
                      <MainHome>
                        <div>
                          <MainHome>
                            <div>
                              <H2 font={'20px'}>{item.text}</H2>
                            </div>
                            {/* <InputBox>hello</InputBox> */}
                          </MainHome>
                        </div>
                        <div
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            setEvent(!event), setFrame(!frame);
                          }}
                        >
                          <SideArrow />
                        </div>
                      </MainHome>
                      <Spacer />
                      <HorizontalBar />
                    </>
                  );
                })}
              </BoxHomeWrapper>
            </Box>
          )}
          {frame && (
            <Box left width={'60%'} title='Pick the Player/Team'>
              <BoxHomeWrapper>
                {match.map((item, index) => {
                  return (
                    <>
                      <Spacer />
                      <MainHome>
                        <div>
                          <MainHome>
                            <div>
                              <H2 font={'20px'}>{item.text}</H2>
                            </div>
                          </MainHome>
                        </div>
                        <div
                          onClick={() => {
                            setFrame(false), setFinal(true);
                          }}
                        >
                          <SideArrow />
                        </div>
                      </MainHome>
                      <Spacer />
                      <HorizontalBar />
                    </>
                  );
                })}
              </BoxHomeWrapper>
            </Box>
          )}
          {final && (
            <Box left width={'60%'} height='100%' title='Pick the Player/Team'>
              <BoxHomeWrapper>
                <CenterItems>
                  <H1> YOUR BET IS SET !</H1>
                  <Spacer />

                  <Image src='/assets/frame.png' />

                  <Spacer />
                  <H1>Add your wager and sumbit your bet for others to take</H1>
                  <Spacer />
                  <P style={{ color: '#BCFE01' }}>
                    Money will only be taken out of your account if someone
                    takes your bet.
                  </P>
                </CenterItems>
              </BoxHomeWrapper>
            </Box>
          )}

          {/* sidebox */}
          {bet && (
            <Box width={'20%'} height={'100%'} title='Activity'>
              <CardBox
                chat='11'
                discription='is watching the game'
                number='48'
                percentage='💒 Marry me tommy!'
                name='Kinera'
                points='20'
                time='12'
              />

              <HorizontalBar />
              <Spacer />

              <CardBox
                chat='11'
                discription='is watching the game'
                number='48'
                percentage='💒 Marry me tommy!'
                name='Kinera'
                points='20'
                time='12'
              />
            </Box>
          )}
          {/* sidebox */}
          {pick && (
            <Box width={'20%'} height={'100%'} title='Your BET'>
              <CenterText>
                <H1 style={{ fontSize: '18px' }}>NHL: Montreal Canadiens</H1>
                <Spacer />
                <H1 style={{ opacity: 0.6 }}>...</H1>
              </CenterText>
            </Box>
          )}
          {team && (
            <Box width={'20%'} height={'100%'} title='Your BET'>
              <CenterText>
                <H1 style={{ fontSize: '18px' }}>NHL: Montreal Canadiens</H1>
                <Spacer />
                <H1 style={{ opacity: 0.6 }}>...</H1>
              </CenterText>
            </Box>
          )}
          {event && (
            <Box width={'20%'} height={'100%'} title='Your Bet'>
              <CenterText>
                <H1 style={{ fontSize: '18px' }}>NHL: Montreal Canadiens</H1>
                <Spacer />
                <P style={{ opacity: 0.6 }}>Brendan Gallagher will have...</P>
              </CenterText>
            </Box>
          )}
          {frame && (
            <Box width={'20%'} height={'100%'} title='Your Bet'>
              <CenterText>
                <H1 style={{ fontSize: '18px' }}>NHL: Montreal Canadiens</H1>
                <Spacer />
                <P style={{ opacity: 0.6 }}>
                  Brendan Gallagher will have 1 Goal Scored......
                </P>
              </CenterText>
            </Box>
          )}

          {final && (
            <Box width={'25%'} height='100%' title='Pick the Player/Team'>
              <BoxHomeWrapper>
                <CenterItems>
                  <H1 style={{ fontSize: '18px' }}>NHL: MONTREAL CANADIAL</H1>
                  <Spacer />
                  <H1 style={{ fontSize: '18px', opacity: 0.6 }}>
                    Brendan Gallagher will have 1 Goal Scored in the 3rd Period.
                  </H1>
                  <Spacer />
                  <BoxHome>
                    <H1>WAGER</H1>
                    <H1 style={{ color: '#CEF458' }}>60.00$</H1>
                  </BoxHome>
                  <Spacer />
                  <BoxHome>
                    <BorderBox>
                      <P>$5</P>
                    </BorderBox>{' '}
                    <BorderBox left='10px'>
                      <P>$10</P>
                    </BorderBox>{' '}
                    <BorderBox left='10px'>
                      <P>$20</P>
                    </BorderBox>{' '}
                    <BorderBox left='10px'>
                      <P style={{ fontSize: '12px' }}>CUSTOM</P>
                    </BorderBox>
                  </BoxHome>
                  <Spacer />
                  <hr style={{ backgroundColor: '#CEF458' }} />
                  <Spacer />
                  <BorderBox>
                    <P> Share with: Live group</P>
                  </BorderBox>
                  <Spacer />
                  <Button>Sumbit Bet</Button>
                </CenterItems>
              </BoxHomeWrapper>
            </Box>
          )}
        </MainHome>
      </Container>
    </Wrapper>
  );
}
