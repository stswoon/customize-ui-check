import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Rating,
  Chip,
  Button,
  IconButton
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 320, borderRadius: 4, boxShadow: 3, overflow: 'hidden' }}>
      {/* Top Section with Split Background */}
      <Box sx={{ position: 'relative', height: 320 }}>
        {/* Background Split: Orange 40%, White 60% */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, #FF4500 38%, #FFFFFF 38%)',
            zIndex: 0,
          }}
        />

        {/* Content Overlay */}
        <Box sx={{ position: 'relative', zIndex: 1, height: '100%', p: 2 }}>
          
          {/* Left Column (Orange Section) */}
          <Stack
            direction="column"
            justifyContent="space-between"
            sx={{ height: '100%', width: '35%', color: 'white' }}
          >
            <Box>
              <Chip
                label="NEW"
                size="small"
                sx={{
                  bgcolor: '#00E676',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.7rem',
                  height: 20,
                  mb: 1
                }}
              />
              <Typography variant="caption" display="block" sx={{ opacity: 0.9, lineHeight: 1 }}>
                x10
              </Typography>
              <Typography variant="caption" sx={{ fontSize: '0.6rem', opacity: 0.8 }}>
                Кратность
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>
                  50 мм
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.6rem', opacity: 0.8, lineHeight: 1.1, display: 'block' }}>
                  Диаметр объектива
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 1, mb: 1 }}>
                PORRO
              </Typography>
              <Chip
                label="-12%"
                size="small"
                sx={{
                  bgcolor: '#E040FB',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  height: 24,
                  px: 0.5
                }}
              />
            </Box>
          </Stack>

          {/* Right Column (Top Right Text) */}
          <Box sx={{ position: 'absolute', top: 16, right: 16, textAlign: 'right' }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', display: 'block' }}>
              Бинокль мощный
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1 }}>
              GAUT
            </Typography>
            <Box sx={{ bgcolor: '#FF4500', color: 'white', px: 0.5, display: 'inline-block', borderRadius: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                VEGA
              </Typography>
            </Box>
          </Box>

          {/* Center Image */}
          {/* Using a placeholder image or a transparent PNG of binoculars if available. 
              Since I don't have one, I'll use a generic placeholder but style it to float.
          */}
          <Box
            component="img"
            src="https://pngimg.com/d/binoculars_PNG98544.png" 
            alt="Binoculars"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '55%',
              transform: 'translate(-50%, -50%) rotate(-15deg)',
              width: '220px',
              height: 'auto',
              filter: 'drop-shadow(10px 10px 10px rgba(0,0,0,0.3))',
              zIndex: 2
            }}
          />

          {/* Zoom Badge (Bottom Right) */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 40,
              right: 16,
              background: 'linear-gradient(45deg, #00C9FF, #92FE9D)',
              p: '2px', // Border gradient
              borderRadius: 1,
            }}
          >
            <Box sx={{ bgcolor: 'black', borderRadius: 0.8, px: 1, py: 0.5, textAlign: 'center' }}>
              <Typography variant="caption" sx={{ color: '#00C9FF', display: 'block', fontWeight: 'bold', lineHeight: 1 }}>
                ZOOM
              </Typography>
              <Typography variant="caption" sx={{ color: 'white', fontSize: '0.6rem' }}>
                УВЕЛИЧЕНИЕ
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom Content */}
      <CardContent sx={{ pt: 1, pb: '16px !important' }}>
        <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mb: 1 }}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            5777 ₽
          </Typography>
          <Typography variant="body2" component="span" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
            7777 ₽
          </Typography>
        </Stack>

        <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 1.2, mb: 1 }}>
          Мощный бинокль Gaut Vega с zoom-увеличением
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Rating value={4} readOnly size="small" sx={{ color: '#D500F9' }} />
          <Typography variant="caption" color="text.secondary">
            77
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
